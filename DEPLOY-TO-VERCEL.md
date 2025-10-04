# 🚀 Quick Start: Deploy to Vercel

This project has been fully configured for Vercel deployment with serverless backend functionality.

## ⚡ Quick Deploy (3 Steps)

### 1. Set Up Database
Create a PostgreSQL database (Vercel Postgres, Neon, Supabase, etc.) and get your `DATABASE_URL`.

### 2. Configure Vercel
Click the button below or manually add these environment variables in Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/yourusername/yourrepo)

**Required Environment Variables:**
- `DATABASE_URL` - PostgreSQL connection string
- `JWT_ACCESS_SECRET` - Random 32+ character string
- `JWT_REFRESH_SECRET` - Different random 32+ character string
- `ACCESS_TOKEN_TTL` - `15m` (recommended)
- `REFRESH_TOKEN_TTL` - `7d` (recommended)
- `NEXT_PUBLIC_API_BASE_URL` - `/api`

**Generate Secrets (PowerShell):**
```powershell
[Convert]::ToBase64String((1..32 | ForEach-Object { Get-Random -Maximum 256 }))
```

### 3. Deploy & Seed
After deployment, seed an admin user:

```bash
# Install Vercel CLI
npm install -g vercel

# Run migration and seed remotely
vercel env pull .env.local
npm run ensure:admin -- --email admin@yourdomain.com --password SecurePass123!
```

## 📚 Full Documentation

For detailed deployment instructions, troubleshooting, and architecture explanation:

👉 **[Read the Complete Vercel Deployment Guide](./VERCEL-DEPLOYMENT-GUIDE.md)**

## 🏗️ Architecture

- **Frontend**: Next.js 15 with App Router
- **Backend**: Vercel Serverless Functions (no separate server needed)
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: JWT with access & refresh tokens
- **API**: RESTful endpoints at `/api/*`

## 📂 Key Files for Deployment

| File | Purpose |
|------|---------|
| `vercel.json` | Vercel configuration |
| `/api/**/*.ts` | Serverless API endpoints |
| `lib/vercel-helpers.ts` | Express to Vercel adapter |
| `prisma/schema.prisma` | Database schema |
| `.vercelignore` | Files excluded from deployment |

## ✅ Deployment Checklist

- [ ] PostgreSQL database created
- [ ] Environment variables configured in Vercel
- [ ] Code pushed to Git repository
- [ ] Project deployed to Vercel
- [ ] Database migrations applied
- [ ] Admin user created
- [ ] Test login at `https://your-app.vercel.app/admin/login`

## 🔗 Available Endpoints

**Production API**: `https://your-app.vercel.app/api`

- `GET /api/health` - Health check
- `POST /api/auth/login` - User login
- `GET /api/auth/me` - Get current user
- `GET /api/blogs` - List all blogs
- `POST /api/blogs` - Create blog (auth required)
- `GET /api/case-studies` - List case studies
- `POST /api/case-studies` - Create case study (auth required)

Full API documentation in [VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md)

## 🛠️ Local Development

For local development with the traditional Express server:

```bash
# Install dependencies
npm install

# Set up environment
cp .env.example .env.local
# Edit .env.local with your values

# Run database migrations
npx prisma migrate dev

# Seed admin user
npm run ensure:admin

# Start both backend and frontend
npm run dev:full

# Or start separately:
npm run backend:dev  # Express server on :4000
npm run dev          # Next.js on :3000
```

## 🆘 Need Help?

- **Deployment Issues**: See [VERCEL-DEPLOYMENT-GUIDE.md](./VERCEL-DEPLOYMENT-GUIDE.md)
- **Local Development**: See [README.md](./README.md)
- **Vercel Support**: https://vercel.com/support

## 📊 What Changed?

This project has been migrated from standalone Express to Vercel Serverless Functions:

✅ Backend converted to `/api` serverless routes  
✅ Database connection optimized for serverless  
✅ Build process configured for Vercel  
✅ Environment variables standardized  
✅ CORS configured for same-domain API  
✅ All Express controllers exported for reuse  

**The old Express server still works for local development!**

---

**Ready to deploy?** Follow the [Complete Deployment Guide](./VERCEL-DEPLOYMENT-GUIDE.md) 🚀
