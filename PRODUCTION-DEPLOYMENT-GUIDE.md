# 🚀 Professional Deployment Guide: Separate Frontend & Backend

## Overview
This guide provides a production-ready deployment strategy for separating your frontend and backend with different domains.

## Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                    Production Setup                         │
├─────────────────────────────────────────────────────────────┤
│ Frontend (Next.js)           Backend (Express)             │
│ ├─ Domain: bhisey.com        ├─ Domain: api.bhisey.com     │
│ ├─ Platform: Vercel         ├─ Platform: Railway/Render   │
│ ├─ Build: Static/SSR        ├─ Database: PostgreSQL       │
│ └─ CDN: Global Edge         └─ Features: REST API         │
└─────────────────────────────────────────────────────────────┘
```

## Step 1: Backend Deployment (Choose One)

### Option A: Railway (Recommended for beginners)
```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login and deploy
railway login
railway init
railway add postgresql
railway deploy
```

### Option B: Render (Detailed Instructions)

**Step-by-Step Render Deployment:**

1. **Connect Your GitHub Repository**
   - Go to [render.com](https://render.com)
   - Click "New +" → "Web Service"
   - Connect your GitHub account
   - Select your entire `bhisey` repository ✅

2. **Configure Build Settings**
   ```yaml
   Name: bhisey-backend
   Root Directory: backend
   Environment: Node
   Build Command: npm install && npm run build
   Start Command: npm start
   ```

3. **Set Environment Variables** (in Render dashboard)
   ```bash
   DATABASE_URL=<your-postgres-url>
   JWT_ACCESS_SECRET=<your-secret>
   JWT_REFRESH_SECRET=<your-refresh-secret>
   NODE_ENV=production
   PORT=4000
   ```

4. **Add PostgreSQL Database**
   - In Render dashboard: "New +" → "PostgreSQL"
   - Copy the Internal Database URL
   - Paste it as `DATABASE_URL` in your web service

5. **Deploy**
   - Click "Create Web Service"
   - Render automatically builds from `/backend` folder
   - Your API will be live at: `https://your-service.onrender.com`

### Option C: DigitalOcean App Platform
```bash
# 1. Connect GitHub
# 2. Auto-detect Node.js
# 3. Set build/run commands
```

## Step 2: Database Setup

### PostgreSQL on Railway
```bash
railway add postgresql
# Copy DATABASE_URL from dashboard
```

### Environment Variables for Backend
```bash
# Set in your hosting platform dashboard
DATABASE_URL=postgresql://user:pass@host:5432/dbname
JWT_ACCESS_SECRET=your-super-secret-key-min-32-chars
JWT_REFRESH_SECRET=your-refresh-secret-key-min-32-chars
NODE_ENV=production
PORT=4000
```

## Step 3: Frontend Deployment on Vercel

### Auto Deployment
```bash
# 1. Connect GitHub repo to Vercel
# 2. Set root directory: "." (since Next.js is in root)
# 3. Set environment variables
```

### Environment Variables for Frontend
```bash
# Set in Vercel dashboard
NEXT_PUBLIC_API_BASE_URL=https://your-backend-domain.railway.app
NEXT_PUBLIC_APP_ENV=production
```

## Step 4: Custom Domains (Optional but Professional)

### Backend Domain Setup
```bash
# 1. Buy domain: api.bhisey.com
# 2. Point CNAME to: your-app.railway.app
# 3. Add domain in Railway dashboard
# 4. SSL auto-configured
```

### Frontend Domain Setup
```bash
# 1. Buy domain: bhisey.com
# 2. Point CNAME to: cname.vercel-dns.com
# 3. Add domain in Vercel dashboard
# 4. SSL auto-configured
```

## Step 5: Testing the Setup

### Health Check
```bash
# Test backend
curl https://api.bhisey.com/api/health

# Test frontend
curl https://bhisey.com
```

### CORS Verification
```javascript
// Test from browser console on bhisey.com
fetch('https://api.bhisey.com/api/health')
  .then(r => r.json())
  .then(console.log);
```

## Step 6: Environment-Specific Configuration

### Development (.env.local)
```bash
NEXT_PUBLIC_API_BASE_URL=http://localhost:4000
```

### Staging (.env.staging)
```bash
NEXT_PUBLIC_API_BASE_URL=https://staging-api.bhisey.com
```

### Production (Vercel Dashboard)
```bash
NEXT_PUBLIC_API_BASE_URL=https://api.bhisey.com
```

## Benefits of This Architecture

### ✅ Scalability
- Frontend and backend scale independently
- CDN optimization for static assets
- Database can be optimized separately

### ✅ Security
- CORS properly configured
- Separate SSL certificates
- API rate limiting enabled

### ✅ Development Experience
- Easy local development
- Clear separation of concerns
- Independent deployments

### ✅ Cost Optimization
- Frontend: Free on Vercel (hobby plan)
- Backend: $5/month on Railway
- Database: Included with backend hosting

## Monitoring & Maintenance

### Error Tracking
```bash
# Add to backend
npm install @sentry/node

# Add to frontend  
npm install @sentry/nextjs
```

### Performance Monitoring
```bash
# Backend metrics via hosting dashboard
# Frontend: Vercel Analytics (built-in)
```

## Troubleshooting Common Issues

### CORS Errors
```javascript
// Check browser network tab
// Verify CORS origins in backend
// Ensure credentials: true on both ends
```

### API Connection Issues
```javascript
// Verify NEXT_PUBLIC_API_BASE_URL
// Check network connectivity
// Validate SSL certificates
```

## Professional Tips

1. **Always use HTTPS in production** - Never mix HTTP/HTTPS
2. **Set up staging environment** - Test before production
3. **Monitor API response times** - Set up alerts
4. **Use environment variables** - Never hardcode URLs
5. **Implement proper error handling** - User-friendly error pages
6. **Set up automated backups** - Database and file storage
7. **Use CI/CD pipelines** - Automate testing and deployment

## Cost Breakdown (Monthly)

```
Frontend (Vercel): $0 (Free tier)
Backend (Railway): $5 (Starter plan)
Domain: $12/year ($1/month)
Total: ~$6/month
```

This architecture provides enterprise-level separation while keeping costs minimal for a growing business.