# 🚀 Vercel Deployment with Render Backend

This guide shows how to deploy your Bhisey frontend to Vercel while using your backend deployed on Render.

## Backend Setup (Already Done ✅)

Your backend is deployed at: `https://bhisey-backend-api.onrender.com`

**Available Endpoints:**
- `/health` - Health check
- `/api/blogs` - Get all blogs
- `/api/blogs/:slug` - Get specific blog
- `/api/case-studies` - Get all case studies  
- `/api/case-studies/:slug` - Get specific case study

## Frontend Configuration for Vercel

### 1. Set Environment Variable in Vercel

**Method 1: Using Vercel Dashboard**
1. Go to [Vercel Dashboard](https://vercel.com/dashboard)
2. Select your Bhisey project
3. Go to Settings → Environment Variables
4. Add this variable:
   ```
   Name: NEXT_PUBLIC_API_BASE_URL
   Value: https://bhisey-backend-api.onrender.com/api
   ```
5. Set it for: `Production`, `Preview`, and `Development`

**Method 2: Using Vercel CLI**
```bash
vercel env add NEXT_PUBLIC_API_BASE_URL production
# When prompted, enter: https://bhisey-backend-api.onrender.com/api
```

### 2. Deploy to Vercel

```bash
# Install Vercel CLI if not already installed
npm i -g vercel

# Deploy your project
vercel --prod
```

### 3. Verify Deployment

After deployment, test these pages:
- **Blog Page**: `https://your-domain.vercel.app/resources/blog`
- **Case Studies**: `https://your-domain.vercel.app/resources/case-studies`
- **Individual Blog**: `https://your-domain.vercel.app/resource/blog/[slug]`
- **Individual Case Study**: `https://your-domain.vercel.app/resource/case-study/[slug]`

## How It Works

### Data Flow
```
Vercel Frontend → Environment Variable → Render Backend
     ↓
1. Browser loads page
2. Frontend reads NEXT_PUBLIC_API_BASE_URL
3. API calls go to: https://bhisey-backend-api.onrender.com/api
4. Backend returns JSON data
5. Frontend displays blog/case study content
```

### Configuration Files Updated
- ✅ `vercel.json` - Keeps existing API routes for any local endpoints
- ✅ `.env.example` - Updated with Render backend URL
- ✅ Frontend code already configured to use backend data

### Pages That Use Backend Data
- ✅ `/resources/blog` - Fetches and displays all blogs
- ✅ `/resources/case-studies` - Fetches and displays all case studies
- ✅ `/resource/blog/[slug]` - Individual blog posts
- ✅ `/resource/case-study/[slug]` - Individual case studies

## Troubleshooting

### If Data Doesn't Load
1. **Check Environment Variable**: Ensure `NEXT_PUBLIC_API_BASE_URL` is set correctly
2. **Check Backend Health**: Visit `https://bhisey-backend-api.onrender.com/health`
3. **Check API Response**: Visit `https://bhisey-backend-api.onrender.com/api/blogs`
4. **Check Browser Console**: Look for CORS or network errors

### CORS Issues
Your backend should already have CORS configured, but if you see CORS errors:
- Check that your backend allows requests from your Vercel domain
- Verify the backend CORS settings in your Express app

### Environment Variable Not Working
- Make sure the variable starts with `NEXT_PUBLIC_`
- Redeploy after adding environment variables
- Check that the variable is set for the correct environment (production/preview)

## Next Steps After Deployment

1. **Test All Functionality**: Ensure blog and case study pages load data correctly
2. **SEO Optimization**: Consider adding metadata and structured data
3. **Performance**: Monitor loading times and optimize if needed
4. **Analytics**: Set up analytics to track page views and user engagement

## Production URLs Structure

```
Frontend (Vercel): https://your-domain.vercel.app
Backend (Render):  https://bhisey-backend-api.onrender.com

API Calls:
- Blogs: GET https://bhisey-backend-api.onrender.com/api/blogs
- Case Studies: GET https://bhisey-backend-api.onrender.com/api/case-studies
```

Your setup is now ready to show dynamic backend data on your blog and case study pages! 🎉