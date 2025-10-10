# Admin Login Credentials

## Bhisey Admin Portal

**Portal URL (Local):** http://localhost:3001  
**Backend API URL (Production):** https://bhisey-backend-api.onrender.com

### Admin Credentials

```
Email: admin@bhesi.com
Password: ChangeMe123!
```

## Login Endpoint

**URL:** `POST https://bhisey-backend-api.onrender.com/api/auth/login`

**Request Body:**
```json
{
  "email": "admin@bhesi.com",
  "password": "ChangeMe123!"
}
```

**Successful Response:**
```json
{
  "success": true,
  "data": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "user": {
      "id": "cmgaxz4b30000q54wh2o6aoo9",
      "email": "admin@bhesi.com",
      "roles": ["ADMIN"]
    }
  }
}
```

## Testing Login via cURL

```bash
curl -X POST https://bhisey-backend-api.onrender.com/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@bhesi.com","password":"ChangeMe123!"}'
```

## Important Notes

1. **Backend is live and working** on Render at: https://bhisey-backend-api.onrender.com
2. **Health check endpoint**: https://bhisey-backend-api.onrender.com/health (returns `{"status":"ok"}`)
3. Admin user is active and has ADMIN role
4. Rate limiting is enabled: 20 requests per 15 minutes for auth endpoints

## Changing Password

To change the admin password, you can run:

```bash
cd backend
npx ts-node scripts/ensure-admin.ts --email admin@bhesi.com --password NewPasswordHere! --reset
```

Or use the quick setup script to reset:

```bash
node scripts/quick-setup-admin.js
```

## Troubleshooting

If login fails, verify:
1. ✅ Backend is running: Check health endpoint
2. ✅ Correct email: `admin@bhesi.com` 
3. ✅ Correct password: `ChangeMe123!`
4. ✅ User is active in database
5. ✅ User has ADMIN role
6. ✅ CORS is configured for your frontend origin
7. ✅ Rate limit not exceeded (20 requests per 15 minutes)

## Database Verification

To verify the admin user exists:

```bash
cd backend
node -e "
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
prisma.user.findUnique({ where: { email: 'admin@bhesi.com' } })
  .then(user => console.log(user))
  .finally(() => prisma.\$disconnect());
"
```
