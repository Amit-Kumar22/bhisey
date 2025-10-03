import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import backendClient from '@/lib/api/backendClient';

export interface CaseStudy { 
  id: string; 
  title: string; 
  slug: string; 
  solution: string;
  clientName?: string;
  industry?: string;
  challenge?: string;
  results?: any[];
  techStack?: string[];
  heroImage?: any;
  publishedAt?: string;
  createdAt: string; 
  updatedAt: string;
  // Computed property for backward compatibility
  content?: string;
}

interface CaseStudiesState {
  items: CaseStudy[];
  selected?: CaseStudy;
  status: 'idle' | 'loading' | 'error';
  error?: string;
}

const initialState: CaseStudiesState = { items: [], status: 'idle' };

export const fetchCaseStudies = createAsyncThunk('caseStudies/fetchAll', async () => {
  const res = await backendClient.get('/case-studies');
  // Map solution to content for backward compatibility
  const caseStudies = (res.data.data as any[]).map(c => ({ ...c, content: c.solution }));
  return caseStudies as CaseStudy[];
});

export const fetchCaseStudy = createAsyncThunk('caseStudies/fetchOne', async (slug: string) => {
  const res = await backendClient.get(`/case-studies/${slug}`);
  // Map solution to content for backward compatibility
  const caseStudy = { ...res.data.data, content: res.data.data.solution };
  return caseStudy as CaseStudy;
});

export const createCaseStudy = createAsyncThunk('caseStudies/create', async (data: any) => {
  const res = await backendClient.post('/case-studies', data);
  return res.data.data as CaseStudy;
});

export const updateCaseStudy = createAsyncThunk('caseStudies/update', async ({ id, data }: { id: string; data: any }) => {
  const res = await backendClient.put(`/case-studies/${id}`, data);
  return res.data.data as CaseStudy;
});

export const deleteCaseStudy = createAsyncThunk('caseStudies/delete', async (id: string) => {
  await backendClient.delete(`/case-studies/${id}`);
  return id;
});

const caseStudiesSlice = createSlice({
  name: 'caseStudies',
  initialState,
  reducers: {},
  extraReducers: (builder: any) => {
    builder
      .addCase(fetchCaseStudies.pending, (state: CaseStudiesState) => { state.status = 'loading'; })
  .addCase(fetchCaseStudies.fulfilled, (state: CaseStudiesState, action: any) => { state.status = 'idle'; state.items = action.payload; })
  .addCase(fetchCaseStudies.rejected, (state: CaseStudiesState, action: any) => { state.status = 'error'; state.error = action.error.message; })
      .addCase(fetchCaseStudy.fulfilled, (state: CaseStudiesState, action: any) => { state.selected = action.payload; });

    builder
      .addCase(createCaseStudy.fulfilled, (state: CaseStudiesState, action: any) => {
        state.items.unshift(action.payload);
      })
      .addCase(updateCaseStudy.fulfilled, (state: CaseStudiesState, action: any) => {
        const idx = state.items.findIndex(c => c.id === action.payload.id);
        if (idx !== -1) state.items[idx] = action.payload;
        if (state.selected && state.selected.id === action.payload.id) state.selected = action.payload;
      })
      .addCase(deleteCaseStudy.fulfilled, (state: CaseStudiesState, action: any) => {
        state.items = state.items.filter(c => c.id !== action.payload);
        if (state.selected && state.selected.id === action.payload) state.selected = undefined;
      });
  }
});

export default caseStudiesSlice.reducer;