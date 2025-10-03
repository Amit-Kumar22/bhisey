import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import backendClient from '@/lib/api/backendClient';

export interface Blog { 
  id: string; 
  title: string; 
  slug: string; 
  body: string; 
  excerpt?: string;
  tags?: string[];
  readingMinutes?: number;
  heroImage?: any;
  seo?: any;
  publishedAt?: string;
  authorId?: string;
  createdAt: string; 
  updatedAt: string; 
  // Computed property for backward compatibility
  content?: string;
}

interface BlogsState {
  items: Blog[];
  selected?: Blog;
  status: 'idle' | 'loading' | 'error';
  error?: string;
}

const initialState: BlogsState = { items: [], status: 'idle' };

export const fetchBlogs = createAsyncThunk('blogs/fetchAll', async () => {
  const res = await backendClient.get('/blogs');
  // Map body to content for backward compatibility
  const blogs = (res.data.data as any[]).map(b => ({ ...b, content: b.body }));
  return blogs as Blog[];
});

export const fetchBlog = createAsyncThunk('blogs/fetchOne', async (slug: string) => {
  const res = await backendClient.get(`/blogs/${slug}`);
  // Map body to content for backward compatibility
  const blog = { ...res.data.data, content: res.data.data.body };
  return blog as Blog;
});

export const createBlog = createAsyncThunk('blogs/create', async (data: any) => {
  const res = await backendClient.post('/blogs', data);
  return res.data.data as Blog;
});

export const updateBlog = createAsyncThunk('blogs/update', async ({ id, data }: { id: string; data: any }) => {
  const res = await backendClient.put(`/blogs/${id}`, data);
  return res.data.data as Blog;
});

export const deleteBlog = createAsyncThunk('blogs/delete', async (id: string) => {
  await backendClient.delete(`/blogs/${id}`);
  return id;
});

const blogsSlice = createSlice({
  name: 'blogs',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchBlogs.pending, (state: BlogsState) => { state.status = 'loading'; })
  .addCase(fetchBlogs.fulfilled, (state: BlogsState, action: any) => { state.status = 'idle'; state.items = action.payload; })
  .addCase(fetchBlogs.rejected, (state: BlogsState, action: any) => { state.status = 'error'; state.error = action.error.message; })
  .addCase(fetchBlog.fulfilled, (state: BlogsState, action: any) => { state.selected = action.payload; });

    builder
      .addCase(createBlog.fulfilled, (state: BlogsState, action: any) => {
        state.items.unshift(action.payload);
      })
      .addCase(updateBlog.fulfilled, (state: BlogsState, action: any) => {
        const idx = state.items.findIndex(b => b.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
        if (state.selected && state.selected.id === action.payload.id) state.selected = action.payload;
      })
      .addCase(deleteBlog.fulfilled, (state: BlogsState, action: any) => {
        state.items = state.items.filter(b => b.id !== action.payload);
        if (state.selected && state.selected.id === action.payload) state.selected = undefined;
      });
  }
});

export default blogsSlice.reducer;