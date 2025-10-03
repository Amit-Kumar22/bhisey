# Quick Start Guide - Dynamic Blog & Case Study Pages

## 🚀 Getting Started

### 1. Start the Backend Server
```bash
cd backend
npm run dev
```
Backend runs on: `http://localhost:4000`

### 2. Start the Frontend Server
```bash
npm run dev
```
Frontend runs on: `http://localhost:3000`

### 3. Access the Pages
- Blog Page: `http://localhost:3000/resources/blog`
- Case Studies: `http://localhost:3000/resources/case-studies`

## 📊 How It Works

### Blog Page
1. Component mounts → Dispatches `fetchBlogs()`
2. Redux calls API → `GET /api/blogs`
3. Data stored in Redux → `state.blogs.items`
4. Filters generated from blog tags
5. User selects filters → Instant client-side filtering

### Case Study Page
1. Component mounts → Dispatches `fetchCaseStudies()`
2. Redux calls API → `GET /api/case-studies`
3. Data stored in Redux → `state.caseStudies.items`
4. Filters generated from industry & techStack fields
5. User selects filters → Instant client-side filtering

## 🔧 Key Files

### Frontend
- `src/app/resources/blog/page.tsx` - Blog listing page
- `src/app/resources/case-studies/page.tsx` - Case study listing page
- `src/store/slices/blogsSlice.ts` - Blog Redux slice
- `src/store/slices/caseStudiesSlice.ts` - Case study Redux slice

### Backend
- `backend/src/controllers/blogController.ts` - Blog API logic
- `backend/src/controllers/caseStudyController.ts` - Case study API logic
- `backend/src/routes/blogRoutes.ts` - Blog routes
- `backend/src/routes/caseStudyRoutes.ts` - Case study routes

## 🎯 Adding Data

### Via Admin Panel
1. Login: `http://localhost:3000/admin/login`
2. Navigate to Blogs or Case Studies
3. Click "Create New"
4. Fill in form and save

### Via API (Postman/cURL)
```bash
# Create a blog
curl -X POST http://localhost:4000/api/blogs \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "My Blog Post",
    "slug": "my-blog-post",
    "body": "Content here",
    "excerpt": "Short description",
    "tags": ["Healthcare", "Technology"],
    "heroImage": {"url": "/images/blog1.jpg"}
  }'

# Create a case study
curl -X POST http://localhost:4000/api/case-studies \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -d '{
    "title": "Client Success Story",
    "slug": "client-success",
    "clientName": "Acme Corp",
    "industry": "Healthcare",
    "challenge": "Problem description",
    "solution": "How we solved it",
    "techStack": ["React", "Node.js"],
    "heroImage": {"url": "/images/case1.jpg"}
  }'
```

## 🐛 Troubleshooting

### Issue: Filters not showing
**Solution**: Make sure backend data has `tags` (blogs) or `industry`/`techStack` (case studies)

### Issue: Images not loading
**Solution**: Check `heroImage` field format - should be `{url: "path"}` or string

### Issue: API not connecting
**Solution**: Verify `NEXT_PUBLIC_API_BASE_URL` in `.env.local`

### Issue: No data showing
**Solution**: 
1. Check backend is running
2. Check database has data
3. Check browser console for errors
4. Verify API endpoints are correct

## 📝 Data Structure

### Blog Post
```typescript
{
  id: string;
  title: string;
  slug: string;
  body: string;              // Main content
  excerpt?: string;          // Short description
  tags?: string[];           // Used for filters
  heroImage?: {url: string}; // Featured image
  publishedAt?: string;      // ISO date
  authorId?: string;
}
```

### Case Study
```typescript
{
  id: string;
  title: string;
  slug: string;
  clientName: string;
  industry: string;          // Used for industry filter
  challenge: string;
  solution: string;          // Main content
  techStack: string[];       // Used for content type filter
  heroImage?: {url: string}; // Featured image
  publishedAt?: string;      // ISO date
}
```

## 🎨 Customizing Filters

### Blog Categories
Edit filter extraction in `page.tsx`:
```typescript
const categories = useMemo(() => {
  const uniqueCategories = new Set<string>();
  blogs.forEach(blog => {
    // Customize which field to use
    if (blog.tags && Array.isArray(blog.tags)) {
      blog.tags.forEach(tag => uniqueCategories.add(tag));
    }
  });
  return ['All Industries', ...Array.from(uniqueCategories).sort()];
}, [blogs]);
```

### Case Study Industries
Filters automatically populate from `industry` field in database.

## 🔐 Authentication

### To Create/Update/Delete:
1. Login via `/admin/login`
2. Token stored in `localStorage`
3. Token auto-attached to API requests
4. Token refreshes automatically

### Public Endpoints (No Auth):
- `GET /api/blogs` ✅
- `GET /api/blogs/:slug` ✅
- `GET /api/case-studies` ✅
- `GET /api/case-studies/:slug` ✅

## 💡 Pro Tips

1. **Performance**: Filters use `useMemo` - only recalculate when data changes
2. **Loading**: Always show loading state for better UX
3. **Errors**: Display user-friendly error messages
4. **Empty States**: Guide users when no data matches filters
5. **Types**: Use TypeScript for type safety

## 📚 Next Steps

1. Add pagination for large datasets
2. Implement search functionality
3. Add sorting options
4. Cache API responses
5. Add more advanced filters

## 🆘 Need Help?

- Check `DYNAMIC-BLOG-CASESTUDY-IMPLEMENTATION.md` for detailed docs
- Review Redux DevTools for state debugging
- Check browser console for errors
- Verify API responses in Network tab

---

**Status**: ✅ Fully Functional | **Version**: 1.0.0 | **Last Updated**: October 4, 2025
