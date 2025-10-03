<div align="center">
	<h1>Fullstack Next.js + Express + PostgreSQL Implementation</h1>
	<p>Dynamic content (Blogs, Case Studies) + Admin JWT Auth + SSR/ISR pages</p>
</div>

> Quick Goal: If you only want the backend running (login + create blog/case study) follow the "Backend Quick Start" section below.

## Backend Quick Start

1. Ensure Node.js (v18+) & PostgreSQL are installed (or use your remote Postgres URL).
2. Copy `.env.example` to `.env` (or keep your existing `.env`) and make sure these exist (either original names or new ones):
	- `DATABASE_URL`
	- `JWT_SECRET` (or `JWT_ACCESS_SECRET`)
	- `JWT_REFRESH_SECRET`
3. Create / prepare the database schema:
	```bash
	psql "$DATABASE_URL" -f backend/schema.sql
	```
4. Seed an admin user:
	```bash
	npm run seed:admin -- --email admin@example.com --password ChangeMe123!
	```
5. Start the backend API server:
	```bash
	npm run backend:dev
	```
6. Test health:
	```bash
	curl http://localhost:4000/health
	```
7. Login (use seeded credentials):
	```bash
	curl -X POST http://localhost:4000/api/auth/login \
	  -H "Content-Type: application/json" \
	  -d '{"email":"admin@example.com","password":"ChangeMe123!"}'
	```
8. Use the returned `token` in an Authorization header to create a blog:
	```bash
	curl -X POST http://localhost:4000/api/blogs \
	  -H "Authorization: Bearer TOKEN_HERE" \
	  -H "Content-Type: application/json" \
	  -d '{"title":"First Blog","slug":"first-blog","content":"Some meaningful content body..."}'
	```
9. Create a case study similarly:
	```bash
	curl -X POST http://localhost:4000/api/case-studies \
	  -H "Authorization: Bearer TOKEN_HERE" \
	  -H "Content-Type: application/json" \
	  -d '{"title":"Example Case","slug":"example-case","content":"Case study narrative text..."}'
	```

Troubleshooting Quick Tips:
| Issue | Likely Cause | Fix |
|-------|--------------|-----|
| Missing required env var | Name mismatch | Use JWT_SECRET or JWT_ACCESS_SECRET (both supported) |
| 401 Unauthorized | No/expired Bearer token | Re-login and retry with header `Authorization: Bearer <token>` |
| duplicate key value violates unique constraint | Slug already used | Change `slug` field |
| ECONNREFUSED / db error | DB not reachable | Check `DATABASE_URL`, network, SSL params |
| Validation failed | Payload too short / slug invalid | Follow schema: slug lowercase, only a-z0-9- |

### Helper Scripts
| Script | Purpose | Usage |
|--------|---------|-------|
| `npm run gen:hash -- "Password123!"` | Generate bcrypt hash for manual SQL insert | outputs hash + SQL snippet |
| `npm run seed:admin -- --email a@b.com --password Pwd123!` | Seeds admin into `admins` table | automatic check for existing |
| `npm run dev:full` | Run backend + Next.js together | Needs `concurrently` dependency (add if missing) |
| `npm run migrate:admins` | Migrate legacy admins -> users table (Prisma) | After ensuring users table |

### Auth Merge Notes
### Backend TypeScript (ts-node) Note
### Frontend API Base Resolution
Axios client now resolves its `baseURL` with deterministic precedence:
1. `NEXT_PUBLIC_API_BASE_URL` if set (absolute or relative – recommended for prod)
2. `window.__API_BASE__` (future runtime injection hook)
3. Dev heuristic: if running on `http://localhost:3000` -> `http://localhost:4000/api`
4. Fallback: `/api`

Set `NEXT_PUBLIC_API_BASE_URL` explicitly to avoid ambiguity, e.g.:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000/api
```
The frontend uses an ESNext/bundler module setting which caused `SyntaxError: Cannot use import statement outside a module` when running the Express backend directly with ts-node. A separate backend tsconfig (`backend/tsconfig.backend.json`) now compiles with `module: CommonJS`. Use:
```bash
npm run backend:dev      # ts-node
npm run backend:build && npm run backend:start  # compiled JS
```

The legacy `admins` table has been superseded by the Prisma `users` table. Current backend login now resolves users through Prisma (`AdminModel` facade) and enforces `roles` includes `ADMIN` & `active=true`.

Migration steps if coming from older clone:
1. Ensure users table exists: `npx ts-node --transpile-only scripts/ensure-users-table.ts`
2. Run migration: `npm run migrate:admins`
3. Test login with migrated admin email.
4. (Optional) Drop old table after verifying: `DROP TABLE admins;`

Creating a new admin now (preferred):
```bash
node scripts/gen-hash.js "StrongPass123!"  # if you need hash
npx ts-node --transpile-only scripts/ensure-users-table.ts --email admin@bhesi.com --password StrongPass123!
```

---

## Contents
1. Overview
2. Directory Structure
3. Environment Variables
4. Environment Configuration
4. Database Schema & Initialization
5. Running the Stack (Dev)
6. API Endpoints
7. Frontend Integration Patterns
8. Admin Workflow
9. Security & Production Notes
10. Roadmap / Next Steps
11. Original Planning Documents

---
## 1. Overview
This repository now contains a working slice of the platform: an Express backend providing CRUD for blogs and case studies plus admin authentication, and a Next.js frontend with dynamic pages (`/resource/blog/[slug]`, `/resource/case-study/[slug]`) and basic admin UI (`/admin`, `/admin/login`).

## 2. Directory Structure
```
backend/
	schema.sql              # PostgreSQL DDL
	src/
		app.ts                # Express app wiring
		server.ts             # Startup script
		config/               # env + db pool
		controllers/          # auth, blog, caseStudy controllers
		models/               # PG data access models
		middleware/           # auth, validation, error handling
		routes/               # Express routers
		utils/                # logger, jwt helpers
		validation/           # Zod schemas
src/
	app/                    # Next.js App Router pages
		admin/                # admin login + dashboard
		resource/blog/[slug]/ # dynamic blog page
		resource/case-study/[slug]/ # dynamic case study page
	store/                  # Redux Toolkit slices
	lib/api/backendClient.ts# Axios instance with refresh logic
```

## 3. Environment Variables
Create a `.env` in project root:
```
DATABASE_URL=postgres://user:password@localhost:5432/yourdb
JWT_ACCESS_SECRET=replace_with_long_random_string
JWT_REFRESH_SECRET=replace_with_long_random_string
ACCESS_TOKEN_TTL=15m
REFRESH_TOKEN_TTL=7d
PORT=4000
NEXT_PUBLIC_BACKEND_URL=http://localhost:4000
```

### Environment Configuration

Create a `.env` file (you can copy from `.env.example`). Do **not** commit real secrets.

Key variables:

| Variable | Purpose | Example |
|----------|---------|---------|
| `DATABASE_URL` | PostgreSQL connection (Prisma + auth) | `postgres://user:pass@host:port/db?sslmode=require` |
| `JWT_SECRET` | Access token signing secret | long random string |
| `JWT_REFRESH_SECRET` | Refresh token signing secret | long random string (different) |
| `JWT_EXPIRES_IN` | Access token lifetime | `1h` |
| `JWT_REFRESH_EXPIRES_IN` | Refresh token lifetime | `7d` |
| `NEXT_PUBLIC_API_BASE_URL` | Override client axios base (optional) | `/api/v1` or full URL |
| `BCRYPT_ROUNDS` | Hash cost factor | `12` |
| `CORS_ORIGIN` | Allowed origin for API | `http://localhost:3000` |

Example remote Aiven Postgres URL:

```
DATABASE_URL="postgres://avnadmin:<PASSWORD>@pg-xxxxxx-yourinstance.aivencloud.com:27260/yourdb?sslmode=require"
```

Run migrations after setting the URL:

```
npx prisma generate
npx prisma migrate deploy   # or migrate dev --name init (initial setup)
```

Seed an admin user (one-off) via Prisma Studio or SQL:

```
# Generate a password hash in Node REPL
require('bcryptjs').hashSync('password123', 12)
```

Then insert (adjust for your environment):

```sql
INSERT INTO users (email, name, "passwordHash", roles, active, "tokenVersion")
VALUES ('admin@bhesi.com','Admin User','$2a$12$<hashHere>', ARRAY['ADMIN'], true, 0);
```

### Auth Rehydration
On page load the client runs a silent `GET /api/v1/auth/me` if tokens exist. Invalid tokens are cleared automatically.

### Admin-Only Login
The `/api/v1/auth/login` route currently permits authentication ONLY for users whose `roles` array contains `ADMIN`. Non-admin users will receive `403` with `{ code: "forbidden" }`.

### Seeding an Admin User
You can seed an admin via the provided script:
```
npx ts-node scripts/seed-admin.ts --email admin@bhesi.com --name "Admin User" --password password123
```
If the user already exists the script exits safely. Remember to choose a strong production password and rotate secrets.

```

## 4. Database Schema & Initialization
Apply `backend/schema.sql` to your PostgreSQL instance. Example (psql):
```sql
\i backend/schema.sql;
-- Create an initial admin (hash generated via bcrypt with 12 rounds)
INSERT INTO admins (email, password_hash) VALUES ('admin@example.com', '$2a$12$REPLACEWITHGENERATEDBCREPTHASH');
```
Generate a bcrypt hash in Node REPL:
```js
require('bcryptjs').hash('StrongPassword123', 12).then(console.log)
```

## 5. Running the Stack (Dev)
Install dependencies:
```bash
npm install
```
Run backend (Express):
```bash
npm run backend:dev
```
Run frontend (Next.js):
```bash
npm run dev
```
Access:
- Backend health: http://localhost:4000/health
- Blog list (API): http://localhost:4000/api/blogs
- Admin login UI: http://localhost:3000/admin/login

## 6. API Endpoints (Summary)
Auth:
- POST `/api/auth/login`  { email, password }
- POST `/api/auth/refresh` { refreshToken }
- POST `/api/auth/logout`
- GET  `/api/auth/me` (Bearer access token)

Blogs:
- GET    `/api/blogs`
- GET    `/api/blogs/:slug`
- POST   `/api/blogs` (auth) { title, slug, content }
- PUT    `/api/blogs/:id` (auth)
- DELETE `/api/blogs/:id` (auth)

Case Studies:
- GET    `/api/case-studies`
- GET    `/api/case-studies/:slug`
- POST   `/api/case-studies` (auth)
- PUT    `/api/case-studies/:id` (auth)
- DELETE `/api/case-studies/:id` (auth)

All JSON responses follow shape:
```json
{ "success": true, "data": { ... } }
// or
{ "success": false, "error": { "code": "...", "message": "...", "details": [] }}
```

## 7. Frontend Integration Patterns
Redux slices: `src/store/slices/*`
Axios client: `src/lib/api/backendClient.ts`
Automatic refresh: 401 triggers `/auth/refresh` if `refresh_token` present.

Fetching inside server components (dynamic pages):
```ts
const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/blogs/${slug}`, { next: { revalidate: 60 }});
```

Client-side (example login):
```ts
dispatch(login({ email, password }));
```

## 8. Admin Workflow
1. Visit `/admin/login`
2. Submit credentials → stores `auth_token` & `refresh_token` in `localStorage`.
3. Protected actions (create/update/delete) send Bearer access token.
4. If access token expires, interceptor refreshes transparently (if refresh token valid).

## 9. Security & Production Notes
- Consider storing refresh tokens server-side (whitelist) or using rotating tokens + revocation list.
- Add rate limiting (express-rate-limit is already in dependencies—can wire easily).
- Sanitize or restrict HTML in `content` fields to prevent XSS (current server trusts input).
- Implement CORS restrictions (currently `origin: *`).
- Use HTTPS and secure secrets manager in deployment.
- Add logging aggregation (pino already integrated).
 - Implemented: basic `express-rate-limit` on auth (20 / 15m) and write endpoints (100 / 10m).
 - Implemented: server-side HTML sanitization via `sanitize-html` in a centralized utility.

## 10. Roadmap / Next Steps
- Add create/edit UI forms in admin for blogs & case studies.
- Add pagination + search filters.
- Introduce OpenAPI spec generation & client typing (e.g. zod + openapi integration).
- Add e2e tests (Playwright / Cypress) for admin flows.
- Content moderation / versioning.
- Image/media handling & uploads.

## 11. Original Planning Documents
Still present for reference:
- `01-site-structure.md`
- `02-backend-apis.md`
- `03-database-schema.md`
- `04-data-flow.md`
- `05-non-functional.md`
- `06-milestones.md`
- `07-quality-review.md`

---
Internal use. Do not redistribute externally without permission.
