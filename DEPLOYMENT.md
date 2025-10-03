## Deployment Guide

### 1. Prerequisites
- Node.js LTS (>=18)
- PostgreSQL 14+
- (Optional) Reverse proxy (NGINX / Traefik)
- Environment variables (.env) configured

### 2. Required Environment Variables
| Name | Description |
|------|-------------|
| DATABASE_URL | PostgreSQL connection string |
| JWT_ACCESS_SECRET | Long random string (>=32 chars) |
| JWT_REFRESH_SECRET | Long random string (>=32 chars) |
| ACCESS_TOKEN_TTL | e.g. 15m |
| REFRESH_TOKEN_TTL | e.g. 7d |
| PORT | API port (default 4000) |
| NEXT_PUBLIC_BACKEND_URL | Public base URL of backend (e.g. https://api.example.com) |

### 3. Database Migration
Use Prisma migrations instead of raw SQL:
```bash
npx prisma migrate deploy   # production
# or for first-time local development:
npx prisma migrate dev --name init
```
Seed an admin (script provided):
```bash
npx ts-node scripts/seed-admin.ts --email admin@example.com --name "Admin User" --password StrongPassword123
```

### 4. Production Build
```bash
npm ci
npm run build   # Builds Next.js (includes API route handlers)
```
No separate Express server is required; all API endpoints are implemented as Next.js route handlers under `src/app/api/v1`.

### 5. Process Manager (PM2 example)
```bash
pm2 start "npm run start" --name web
```

### 6. Reverse Proxy (NGINX snippet)
```
server {
  server_name www.example.com;
  location / {
    proxy_pass http://127.0.0.1:3000;
    proxy_set_header Host $host;
    proxy_set_header X-Real-IP $remote_addr;
  }
}
```

### 7. Security Checklist
- [x] Rate limiting (basic) in place
- [x] HTML sanitization
- [ ] HTTPS termination (proxy / load balancer)
- [ ] Centralized logging / metrics (e.g., ELK, Grafana)
- [ ] Secrets in vault (not plain .env in production)
- [ ] Refresh token rotation & revocation (future)
- [ ] Add CSP headers

### 8. Observability
Integrate pino transport to log aggregation or use sidecar (Vector / Fluent Bit). Add health check at `/health` into uptime monitoring.

### 9. Scaling Strategy
- Stateless API instances behind load balancer
- PostgreSQL vertical scaling or read replicas if read-heavy
- Add Redis for caching (blog/case study lists) and storing session revocation lists
- CDN for static assets (Next.js output + images)

### 10. Zero-Downtime Deployment
1. Provision new app version
2. Run migrations (idempotent)
3. Warm up (health check success)
4. Switch load balancer target
5. Drain old instances

### 11. OpenAPI Usage
Serve `openapi.yaml` via static hosting or integrate swagger-ui:
```bash
npm install swagger-ui-express
```
Then mount in Express (optional future enhancement).

### 12. Backup & Recovery
- Daily logical dumps: `pg_dump -Fc` to object storage
- Point-in-time recovery: enable WAL archiving if critical

### 13. Future Hardening
- Implement structured audit logging for admin CRUD
- ETag / Last-Modified for GET responses
- Pagination & query filters to mitigate large responses

---
This guide evolves with infrastructure decisions. Keep infra-as-code (Terraform / Bicep) revisions aligned with these steps.