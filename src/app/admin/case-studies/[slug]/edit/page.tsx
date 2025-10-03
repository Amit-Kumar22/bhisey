"use client";
import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { fetchCaseStudy, updateCaseStudy } from '@/store/slices/caseStudiesSlice';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { RootState } from '@/store';
import { ArrowLeft, Save, Briefcase, Link as LinkIcon, Code, Image as ImageIcon } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function EditCaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug;
  const dispatch = useAppDispatch();
  useAuthGuard();
  const router = useRouter();
  const { selected, items } = useAppSelector((s: RootState) => s.caseStudies);
  const [title, setTitle] = useState('');
  const [newSlug, setNewSlug] = useState('');
  const [content, setContent] = useState('');
  const [clientName, setClientName] = useState('');
  const [industry, setIndustry] = useState('');
  const [challenge, setChallenge] = useState('');
  const [techStack, setTechStack] = useState('');
  const [heroImage, setHeroImage] = useState<File | null>(null);
  const [heroImagePreview, setHeroImagePreview] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let mounted = true;
    async function load() {
      try {
        const local = items.find((c: any) => c.slug === slug);
        if (local) {
          if (!mounted) return;
          setTitle(local.title); 
          setNewSlug(local.slug); 
          setContent(local.content || local.solution);
          setClientName(local.clientName || '');
          setIndustry(local.industry || '');
          setChallenge(local.challenge || '');
          setTechStack(local.techStack ? local.techStack.join(', ') : '');
          setHeroImagePreview(local.heroImage || '');
          setLoading(false); 
          return;
        }
        // Fetch the case study if not in items
        const result = await dispatch(fetchCaseStudy(slug)).unwrap();
        if (!mounted) return;
        setTitle(result.title);
        setNewSlug(result.slug);
        setContent(result.content || result.solution);
        setClientName(result.clientName || '');
        setIndustry(result.industry || '');
        setChallenge(result.challenge || '');
        setTechStack(result.techStack ? result.techStack.join(', ') : '');
        setHeroImagePreview(result.heroImage || '');
      } catch (e: any) { 
        if (mounted) setError(e.message || 'Failed to load case study'); 
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
      // Find the case study from either selected or items
      const caseStudy = selected || items.find((c: any) => c.slug === slug);
      if (!caseStudy) throw new Error('Case study not loaded');
      
      const data: any = { title, slug: newSlug, content };
      if (clientName) data.clientName = clientName;
      if (industry) data.industry = industry;
      if (challenge) data.challenge = challenge;
      if (techStack) data.techStack = techStack.split(',').map(t => t.trim()).filter(Boolean);
      if (heroImage) {
        // TODO: Upload new image to server and get URL
        data.heroImage = heroImagePreview;
      } else if (heroImagePreview) {
        // Keep existing image URL if no new file uploaded
        data.heroImage = heroImagePreview;
      }
      
      await dispatch(updateCaseStudy({ id: caseStudy.id, data })).unwrap();
      router.push('/admin/case-studies');
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
          <p className="text-sm font-medium text-neutral-600">Loading case study...</p>
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
            <Briefcase className="w-8 h-8 text-red-400" />
          </div>
          <h3 className="text-lg font-semibold text-neutral-800 mb-2">Failed to load case study</h3>
          <p className="text-sm text-red-600 mb-6">{error}</p>
          <Link 
            href="/admin/case-studies"
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Case Studies
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
            href="/admin/case-studies"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-neutral-200 hover:bg-neutral-50 transition-colors"
            aria-label="Back to case studies"
          >
            <ArrowLeft className="w-5 h-5 text-neutral-600" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold text-neutral-800">Edit Case Study</h1>
            <p className="text-sm text-neutral-600 mt-1">Update your case study details</p>
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
              <Briefcase className="w-4 h-4 text-accent-500" />
              Title
            </label>
            <input 
              id="title"
              type="text"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
              placeholder="Enter case study title"
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
              placeholder="case-study-slug"
              value={newSlug} 
              onChange={e => setNewSlug(e.target.value)} 
              required 
            />
            <p className="text-xs text-neutral-500 flex items-center gap-1.5">
              <span className="text-neutral-400">Preview:</span>
              <span className="font-mono text-accent-600">/resource/case-study/{newSlug || 'slug'}</span>
            </p>
          </div>

          {/* Client Name Field */}
          <div className="space-y-2">
            <label htmlFor="clientName" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <Briefcase className="w-4 h-4 text-accent-500" />
              Client Name
            </label>
            <input 
              id="clientName"
              type="text"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
              placeholder="Acme Corporation"
              value={clientName} 
              onChange={e => setClientName(e.target.value)} 
            />
          </div>

          {/* Industry Field */}
          <div className="space-y-2">
            <label htmlFor="industry" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <Briefcase className="w-4 h-4 text-accent-500" />
              Industry
            </label>
            <input 
              id="industry"
              type="text"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
              placeholder="Healthcare, Finance, etc."
              value={industry} 
              onChange={e => setIndustry(e.target.value)} 
            />
          </div>

          {/* Challenge Field */}
          <div className="space-y-2">
            <label htmlFor="challenge" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <Code className="w-4 h-4 text-accent-500" />
              Challenge
            </label>
            <textarea 
              id="challenge"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 min-h-32 resize-y"
              placeholder="Describe the challenge"
              value={challenge} 
              onChange={e => setChallenge(e.target.value)} 
            />
            <p className="text-xs text-neutral-500">HTML tags are supported</p>
          </div>

          {/* Tech Stack Field */}
          <div className="space-y-2">
            <label htmlFor="techStack" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <Code className="w-4 h-4 text-accent-500" />
              Tech Stack
            </label>
            <input 
              id="techStack"
              type="text"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-2.5 text-sm text-neutral-900 placeholder-neutral-400 transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20"
              placeholder="React, Node.js, PostgreSQL"
              value={techStack} 
              onChange={e => setTechStack(e.target.value)} 
            />
            <p className="text-xs text-neutral-500">Comma-separated technologies</p>
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
            <p className="text-xs text-neutral-500">Upload the main image for this case study (JPG, PNG, GIF)</p>
          </div>

          {/* Content Field */}
          <div className="space-y-2">
            <label htmlFor="content" className="flex items-center gap-2 text-sm font-semibold text-neutral-700">
              <Code className="w-4 h-4 text-accent-500" />
              Solution
            </label>
            <textarea 
              id="content"
              className="block w-full rounded-lg border border-neutral-300 bg-white px-4 py-3 text-sm text-neutral-900 placeholder-neutral-400 font-mono transition-colors focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/20 min-h-[400px] resize-y"
              placeholder="Describe the solution (HTML allowed)"
              value={content} 
              onChange={e => setContent(e.target.value)} 
              required 
            />
            <p className="text-xs text-neutral-500">HTML tags are supported. Describe how you solved the problem.</p>
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
              onClick={() => router.push('/admin/case-studies')}
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