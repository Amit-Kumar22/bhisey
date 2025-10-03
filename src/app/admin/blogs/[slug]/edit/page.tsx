"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { fetchBlog, updateBlog } from '@/store/slices/blogsSlice';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { RootState } from '@/store';
import { ArrowLeft, Save, FileText, Link as LinkIcon, Code } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EditBlogPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const dispatch = useAppDispatch();
  useAuthGuard();
  const router = useRouter();
  const { selected, items } = useAppSelector((s: RootState) => s.blogs);
  const [title, setTitle] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [content, setContent] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [tags, setTags] = useState('');
  const [heroImage, setHeroImage] = useState<File | null>(null);
  const [heroImagePreview, setHeroImagePreview] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        // see if it is already in items
        const local = items.find((b: any) => b.slug === slug);
        if (local) {
          if (!mounted) return;
          setTitle(local.title); 
          setNewSlug(local.slug); 
          setContent(local.content || local.body);
          setExcerpt(local.excerpt || '');
          setTags(local.tags ? local.tags.join(', ') : '');
          setHeroImagePreview(local.heroImage || '');
          setLoading(false); 
          return;
        }
        // Fetch the blog if not in items
        const result = await dispatch(fetchBlog(slug)).unwrap();
        if (!mounted) return;
        setTitle(result.title);
        setNewSlug(result.slug);
        setContent(result.content || result.body);
        setExcerpt(result.excerpt || '');
        setTags(result.tags ? result.tags.join(', ') : '');
        setHeroImagePreview(result.heroImage || '');
      } catch (e: any) { 
        if (mounted) setError(e.message || 'Failed to load blog'); 
      } finally { 
        if (mounted) setLoading(false); 
      }
    }
    load();
    return () => { mounted = false; };
  }, [dispatch, slug, items]);

  function handleImageChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (file) {
      setHeroImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setHeroImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null); 
    setSaving(true);
    try {
      // Find the blog from either selected or items
      const blog = selected || items.find((b: any) => b.slug === slug);
      if (!blog) throw new Error('Blog not loaded');
      
      const data: any = { title, slug: newSlug, content };
      if (excerpt) data.excerpt = excerpt;
      if (tags) data.tags = tags.split(',').map(t => t.trim()).filter(Boolean);
      if (heroImage) {
        // TODO: Upload new image to server and get URL
        data.heroImage = heroImagePreview;
      } else if (heroImagePreview) {
        // Keep existing image URL if no new file uploaded
        data.heroImage = heroImagePreview;
      }
      
      await dispatch(updateBlog({ id: blog.id, data })).unwrap();
      router.push('/admin/blogs');
    } catch (err: any) {
      setError(err.message || 'Update failed');
    } finally { 
      setSaving(false); 
    }
  }

  if (loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-10 h-10 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="text-sm font-medium text-neutral-600">Loading blog...</p>
        </div>
      </div>
    );
  }

  // Show error state if there was an error loading
  if (error && !loading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <FileText className="w-8 h-8 text-red-400" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 mb-2">Failed to load blog</h3>
          <p className="text-sm text-red-600 mb-6">{error}</p>
          <Link 
            href="/admin/blogs"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div className="flex items-center gap-4">
          <Link 
            href="/admin/blogs"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
            aria-label="Back to blogs"
          >
            <ArrowLeft className="w-5 h-5 text-neutral-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-neutral-800">Edit Blog Post</h1>
            <p className="text-sm text-neutral-600 mt-1">Update your blog post details</p>
          </div>
        </div>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700" role="alert">
          <p className="font-medium">Error</p>
          <p className="mt-1">{error}</p>
        </div>
      )}

      {/* Form Card */}
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm">
        <form onSubmit={onSubmit} className="p-6 sm:p-8 space-y-6">
          {/* Title Field */}
          <div className="space-y-2">
            <label htmlFor="title" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <FileText className="w-4 h-4 text-accent-500" />
              Title
            </label>
            <input 
              id="title"
              type="text"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
              placeholder="Enter blog post title"
              value={title} 
              onChange={e => setTitle(e.target.value)} 
              required 
            />
          </div>

          {/* Slug Field */}
          <div className="space-y-2">
            <label htmlFor="slug" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <LinkIcon className="w-4 h-4 text-accent-500" />
              URL Slug
            </label>
            <input 
              id="slug"
              type="text"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 font-mono transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
              placeholder="blog-post-slug"
              value={newSlug} 
              onChange={e => setNewSlug(e.target.value)} 
              required 
            />
            <p className="text-xs text-neutral-500 flex items-center gap-1.5">
              <span className="text-neutral-400">Preview:</span>
              <span className="font-mono text-accent-600">/resource/blog/{newSlug || 'slug'}</span>
            </p>
          </div>

          {/* Excerpt Field */}
          <div className="space-y-2">
            <label htmlFor="excerpt" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <FileText className="w-4 h-4 text-accent-500" />
              Excerpt
            </label>
            <textarea 
              id="excerpt"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 min-h-24 resize-y"
              placeholder="Brief summary or excerpt"
              value={excerpt} 
              onChange={e => setExcerpt(e.target.value)} 
            />
            <p className="text-xs text-neutral-500">Short description for listings and previews</p>
          </div>

          {/* Tags Field */}
          <div className="space-y-2">
            <label htmlFor="tags" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <Code className="w-4 h-4 text-accent-500" />
              Tags
            </label>
            <input 
              id="tags"
              type="text"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
              placeholder="javascript, react, tutorial"
              value={tags} 
              onChange={e => setTags(e.target.value)} 
            />
            <p className="text-xs text-neutral-500">Comma-separated list of tags</p>
          </div>

          {/* Hero Image Field */}
          <div className="space-y-2">
            <label htmlFor="heroImage" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <LinkIcon className="w-4 h-4 text-accent-500" />
              Hero Image
            </label>
            <input 
              id="heroImage"
              type="file"
              accept="image/*"
              className="block w-full text-sm text-neutral-700 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent-50 file:text-accent-700 hover:file:bg-accent-100 file:cursor-pointer cursor-pointer border border-neutral-300 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              onChange={handleImageChange} 
            />
            {heroImagePreview && typeof heroImagePreview === 'string' && heroImagePreview.trim() !== '' && (
              <div className="mt-3 relative w-full h-48 rounded-lg overflow-hidden border border-neutral-200">
                <Image 
                  src={heroImagePreview} 
                  alt="Preview" 
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="text-xs text-neutral-500">Upload the main image for this blog post (JPG, PNG, GIF)</p>
          </div>

          {/* Content Field */}
          <div className="space-y-2">
            <label htmlFor="content" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <Code className="w-4 h-4 text-accent-500" />
              Content
            </label>
            <textarea 
              id="content"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 font-mono transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 min-h-[400px] resize-y"
              placeholder="Enter blog content (HTML allowed)"
              value={content} 
              onChange={e => setContent(e.target.value)} 
              required 
            />
            <p className="text-xs text-neutral-500">HTML tags are supported for formatting</p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-200">
            <button 
              type="submit"
              disabled={saving}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 shadow-sm hover:shadow-base hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:translate-y-0 disabled:hover:shadow-sm"
            >
              {saving ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Saving...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Save Changes
                </>
              )}
            </button>
            <button 
              type="button"
              onClick={() => router.push('/admin/blogs')}
              className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-neutral-700 text-sm font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-50 transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-500 focus:ring-offset-2"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}