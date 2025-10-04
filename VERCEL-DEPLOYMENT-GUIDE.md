# 🚀 Vercel Deployment Guide - Complete Backend & Frontend

This guide provides step-by-step instructions to deploy your Next.js application with Express backend functionality on Vercel.

## 📋 Prerequisites

1. ✅ Vercel account ([signup here](https://vercel.com/signup))
2. ✅ PostgreSQL database (Vercel Postgres, Supabase, Neon, Aiven, etc.)
3. ✅ GitHub/GitLab repository with your code
4. ✅ Node.js 18+ installed locally for testing

## 🔧 Architecture Changes Made

### Backend Conversion to Serverless
- **Before**: Standalone Express server (`backend/src/server.ts`)
- **After**: Vercel Serverless Functions in `/api` directory
- All Express routes converted to individual Vercel serverless endpoints
- Connection pooling optimized for serverless (1 connection per function)

### File Structure
```
/api                          # Vercel Serverless Functions
  /auth
    login.ts                  # POST /api/auth/login
    refresh.ts                # POST /api/auth/refresh
    me.ts                     # GET /api/auth/me
    logout.ts                 # POST /api/auth/logout
  /blogs
    index.ts                  # GET/POST /api/blogs
    [id].ts                   # GET/PUT/DELETE /api/blogs/:id
  /case-studies
    index.ts                  # GET/POST /api/case-studies
    [id].ts                   # GET/PUT/DELETE /api/case-studies/:id
  health.ts                   # GET /api/health

/backend                      # Shared backend code
  /src
    /config                   # DB & environment configs
    /controllers              # Business logic (exported for API routes)
    /middleware               # Auth & validation middleware
    /models                   # Database models
    /utils                    # JWT, logging, sanitization

/lib
  vercel-helpers.ts           # Express to Vercel adapter utilities
```

## 📦 Step 1: Install Dependencies

Run the following command to install the Vercel-specific package:

```bash
npm install
```

## 🗄️ Step 2: Database Setup

### Option A: Vercel Postgres (Recommended)

1. Go to your Vercel dashboard
2. Navigate to Storage → Create Database → Postgres
3. Copy the `DATABASE_URL` from the `.env.local` tab
4. The connection string format: `postgres://user:pass@host:5432/db?sslmode=require`

### Option B: External PostgreSQL (Neon, Supabase, Aiven, etc.)

Ensure your DATABASE_URL includes `?sslmode=require` for SSL connection:
```
postgresql://user:password@host.example.com:5432/dbname?sslmode=require
```

### Run Migrations

```bash
# Generate Prisma client
npx prisma generate

# Apply database schema
npx prisma migrate deploy

# Or if starting fresh
npx prisma migrate dev --name init
```

### Seed Admin User

```bash
npm run ensure:admin -- --email admin@yourdomain.com --password YourSecurePassword123!
```

## 🔐 Step 3: Environment Variables Setup

### Local Development (.env.local)
Create a `.env.local` file:

```env
# Database
DATABASE_URL="postgresql://user:password@host:5432/database?sslmode=require"

# JWT Secrets (Generate with: openssl rand -base64 32)
JWT_ACCESS_SECRET="your-long-random-access-secret-here"
JWT_REFRESH_SECRET="your-long-random-refresh-secret-here"

# Token Lifetimes
ACCESS_TOKEN_TTL="15m"
REFRESH_TOKEN_TTL="7d"

# Environment
NODE_ENV="production"

# API Base URL (for frontend)
NEXT_PUBLIC_API_BASE_URL="/api"
```

### Vercel Environment Variables

In your Vercel project settings → Environment Variables, add:

| Variable | Value | Environment |
|----------|-------|-------------|
| `DATABASE_URL` | Your PostgreSQL connection string | Production, Preview, Development |
| `JWT_ACCESS_SECRET` | Long random string | Production, Preview, Development |
| `JWT_REFRESH_SECRET` | Different long random string | Production, Preview, Development |
| `ACCESS_TOKEN_TTL` | `15m` | Production, Preview, Development |
| `REFRESH_TOKEN_TTL` | `7d` | Production, Preview, Development |
| `NODE_ENV` | `production` | Production |
| `NEXT_PUBLIC_API_BASE_URL` | `/api` | Production, Preview, Development |

**Security Note**: Generate secure secrets using:
```bash
# On Linux/Mac
openssl rand -base64 32

# On Windows PowerShell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

## 🚢 Step 4: Deploy to Vercel

### Method 1: Using Vercel CLI (Recommended)

```bash
# Install Vercel CLI globally
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

### Method 2: Using Vercel Dashboard

1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Click "Add New Project"
3. Import your Git repository
4. Configure:
   - **Framework Preset**: Next.js
   - **Root Directory**: `./` (leave as default)
   - **Build Command**: `npm run build` (auto-detected)
   - **Output Directory**: `.next` (auto-detected)
5. Add all environment variables from Step 3
6. Click "Deploy"

### Method 3: GitHub Integration (Continuous Deployment)

1. Push your code to GitHub
2. Connect repository to Vercel
3. Vercel will auto-deploy on every push to `main` branch
4. Pull requests create preview deployments automatically

## ✅ Step 5: Verify Deployment

### Test API Endpoints

Once deployed, test your endpoints (replace `your-app.vercel.app` with your actual domain):

```bash
# Health check
curl https://your-app.vercel.app/api/health

# Login
curl -X POST https://your-app.vercel.app/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@yourdomain.com","password":"YourSecurePassword123!"}'

# Get blogs (public)
curl https://your-app.vercel.app/api/blogs

# Create blog (requires auth token from login)
curl -X POST https://your-app.vercel.app/api/blogs \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{"title":"First Blog","slug":"first-blog","body":"Blog content here"}'
```

### Test Frontend

1. Visit `https://your-app.vercel.app`
2. Navigate to `/admin/login`
3. Login with your admin credentials
4. Create/edit blogs and case studies

## 🔧 Configuration Files Created

### `vercel.json`
Configures deployment settings, environment variables, and API routing.

### `/api/**/*.ts`
Serverless function endpoints that wrap your Express controllers.

### `lib/vercel-helpers.ts`
Utility functions to adapt Express middleware to Vercel's serverless environment.

### `backend/src/config/db.serverless.ts`
Optimized database connection pooling for serverless (1 connection per instance).

### `.vercelignore`
Excludes unnecessary files from deployment to reduce bundle size.

## 🎯 Key Differences from Local Development

| Aspect | Local Development | Vercel Production |
|--------|------------------|-------------------|
| **Backend Server** | Standalone Express on port 4000 | Serverless functions |
| **API URL** | `http://localhost:4000/api` | `/api` (same domain) |
| **Database Connections** | Pool with 10 connections | 1 connection per function |
| **Environment** | `.env` file | Vercel Environment Variables |
| **Deployment** | `npm run dev:full` | Automatic on git push |
| **Logs** | Console output | Vercel Function Logs |

## 📊 Monitoring and Logs

### View Function Logs
1. Go to Vercel Dashboard → Your Project
2. Click on a deployment
3. Navigate to "Functions" tab
4. Click on any function to see invocation logs

### Performance Monitoring
- Vercel automatically tracks function execution time
- Set up alerts for failed function invocations
- Monitor cold start times (usually 100-300ms)

## 🐛 Troubleshooting

### Issue: "Database connection failed"
**Solution**: 
- Verify `DATABASE_URL` in environment variables
- Ensure database allows connections from Vercel IPs
- Check if SSL is required (`?sslmode=require`)
- Test connection with: `npx prisma db pull`

### Issue: "JWT token invalid"
**Solution**:
- Ensure `JWT_ACCESS_SECRET` and `JWT_REFRESH_SECRET` are set in Vercel
- Secrets must be the same across all environments
- Check token expiration settings

### Issue: "Function timeout"
**Solution**:
- Optimize database queries
- Add indexes to frequently queried columns
- Consider using `@vercel/postgres` for faster connections
- Check function execution time in Vercel dashboard (max 10s on Hobby plan)

### Issue: "Cannot find module '@vercel/node'"
**Solution**:
```bash
npm install @vercel/node --save
```

### Issue: "Prisma Client not generated"
**Solution**:
- Ensure `postinstall` script runs: `"postinstall": "prisma generate"`
- Manually run: `npx prisma generate`
- Check that `prisma/schema.prisma` exists

### Issue: "CORS errors on frontend"
**Solution**:
- API routes are on the same domain, CORS shouldn't be needed
- If using external domain: Add proper CORS headers in `vercel.json`
- Check `NEXT_PUBLIC_API_BASE_URL` is set correctly

## 🔒 Security Best Practices

1. ✅ **Never commit secrets** - Use `.env.local` and Vercel Environment Variables
2. ✅ **Use strong JWT secrets** - Minimum 32 characters, random
3. ✅ **Enable SSL** - Always use `https://` in production
4. ✅ **Rate limiting** - Already configured in controllers
5. ✅ **Input sanitization** - Implemented via `sanitize-html`
6. ✅ **SQL injection protection** - Using parameterized queries
7. ✅ **Token expiration** - Short access tokens (15m), longer refresh (7d)

## 📈 Performance Optimization

### Database Connection Pooling
- Serverless: 1 connection per function (already configured)
- Consider upgrading to Vercel Postgres Edge for faster connections

### Caching
- Use ISR (Incremental Static Regeneration) for public pages
- Add `revalidate` to blog/case study pages:
```typescript
export const revalidate = 60; // Revalidate every 60 seconds
```

### Bundle Size
- Already optimized with `.vercelignore`
- Consider code splitting for large components

## 🆘 Need Help?

- **Vercel Docs**: https://vercel.com/docs
- **Next.js Docs**: https://nextjs.org/docs
- **Prisma Docs**: https://www.prisma.io/docs
- **Check deployment logs** in Vercel Dashboard → Functions

## ✅ Deployment Checklist

- [ ] PostgreSQL database created and accessible
- [ ] Database migrations applied (`prisma migrate deploy`)
- [ ] Admin user seeded
- [ ] All environment variables set in Vercel
- [ ] JWT secrets generated (32+ characters)
- [ ] Code pushed to GitHub/GitLab
- [ ] Project imported to Vercel
- [ ] Build successful
- [ ] `/api/health` endpoint returns `{"status":"ok"}`
- [ ] Login works at `/admin/login`
- [ ] Can create/edit blogs and case studies
- [ ] Public pages load correctly

## 🎉 Success!

Your application is now deployed to Vercel with a fully working serverless backend!

**Production URL**: `https://your-app.vercel.app`
**Admin Panel**: `https://your-app.vercel.app/admin/login`

---

**Note**: The old Express standalone server (`npm run backend:dev`) is still available for local development but won't be used in production.
