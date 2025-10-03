"use client";
import { useState } from 'react';
import { useAppDispatch } from '@/hooks/useStore';
import { createCaseStudy } from '@/store/slices/caseStudiesSlice';
import { useAuthGuard } from '@/hooks/useAuthGuard';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import NextImage from 'next/image';
import { ArrowLeft, Save, AlertCircle, Loader, Image as ImageIcon } from 'lucide-react';

export default function NewCaseStudyPage() {
  const dispatch = useAppDispatch();
  useAuthGuard();
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [content, setContent] = useState('');
  const [clientName, setClientName] = useState('');
  const [industry, setIndustry] = useState('');
  const [challenge, setChallenge] = useState('');
  const [techStack, setTechStack] = useState('');
  const [heroImage, setHeroImage] = useState<File | null>(null);
  const [heroImagePreview, setHeroImagePreview] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  function autoSlug(value: string) {
    setTitle(value);
    if (!slug || slug === '') {
      setSlug(value.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,''));
    }
  }

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
      const data: any = { title, slug, content };
      if (clientName) data.clientName = clientName;
      if (industry) data.industry = industry;
      if (challenge) data.challenge = challenge;
      if (techStack) data.techStack = techStack.split(',').map(t => t.trim()).filter(Boolean);
      if (heroImage) {
        // TODO: Upload image to server and get URL
        data.heroImage = heroImagePreview;
      }
      
      await dispatch(createCaseStudy(data)).unwrap();
      router.push('/admin/case-studies');
    } catch (err: any) {
      setError(err.message || 'Failed to create case study');
    } finally { 
      setSaving(false); 
    }
  }

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {/* Breadcrumb */}
      <div className="flex items-center gap-2 text-sm">
        <Link 
          href="/admin/case-studies" 
          className="flex items-center gap-1 text-neutral-600 hover:text-accent-600 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Case Studies
        </Link>
      </div>

      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-neutral-800">Create New Case Study</h1>
        <p className="text-sm text-neutral-600 mt-1">Fill in the details below to create a new case study</p>
      </div>

      {/* Error Alert */}
      {error && (
        <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-semibold text-red-800 mb-1">Error creating case study</p>
            <p className="text-sm text-red-700">{error}</p>
          </div>
        </div>
      )}

      {/* Form Card */}
      <div className="bg-white rounded-xl border border-neutral-200 shadow-sm">
        <form onSubmit={onSubmit} className="p-8 space-y-6">
          {/* Title Field */}
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Title <span className="text-red-500">*</span>
            </label>
            <input 
              id="title"
              type="text"
              className="w-full px-4 py-3 rounded-lg text-base text-neutral-700 bg-white border border-neutral-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 placeholder:text-neutral-400"
              placeholder="Enter case study title"
              value={title} 
              onChange={e=>autoSlug(e.target.value)} 
              required 
            />
          </div>

          {/* Slug Field */}
          <div>
            <label htmlFor="slug" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Slug <span className="text-red-500">*</span>
            </label>
            <input 
              id="slug"
              type="text"
              className="w-full px-4 py-3 rounded-lg text-base text-neutral-700 bg-white border border-neutral-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 placeholder:text-neutral-400 font-mono"
              placeholder="case-study-url-slug"
              value={slug} 
              onChange={e=>setSlug(e.target.value)} 
              required 
            />
            <p className="text-xs text-neutral-500 mt-1.5 flex items-center gap-1">
              <span>URL:</span> 
              <code className="bg-neutral-100 px-2 py-0.5 rounded text-neutral-700 font-mono">
                /resource/case-study/{slug || 'your-slug'}
              </code>
            </p>
          </div>

          {/* Client Name Field */}
          <div>
            <label htmlFor="clientName" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Client Name
            </label>
            <input 
              id="clientName"
              type="text"
              className="w-full px-4 py-3 rounded-lg text-base text-neutral-700 bg-white border border-neutral-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 placeholder:text-neutral-400"
              placeholder="Acme Corporation"
              value={clientName} 
              onChange={e=>setClientName(e.target.value)} 
            />
          </div>

          {/* Industry Field */}
          <div>
            <label htmlFor="industry" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Industry
            </label>
            <input 
              id="industry"
              type="text"
              className="w-full px-4 py-3 rounded-lg text-base text-neutral-700 bg-white border border-neutral-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 placeholder:text-neutral-400"
              placeholder="Healthcare, Finance, E-commerce, etc."
              value={industry} 
              onChange={e=>setIndustry(e.target.value)} 
            />
          </div>

          {/* Challenge Field */}
          <div>
            <label htmlFor="challenge" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Challenge
            </label>
            <textarea 
              id="challenge"
              className="w-full px-4 py-3 rounded-lg text-sm text-neutral-700 bg-white border border-neutral-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 placeholder:text-neutral-400 resize-vertical min-h-32"
              placeholder="Describe the client's challenge or problem"
              value={challenge} 
              onChange={e=>setChallenge(e.target.value)} 
            />
            <p className="text-xs text-neutral-500 mt-1.5">
              HTML markup is allowed
            </p>
          </div>

          {/* Tech Stack Field */}
          <div>
            <label htmlFor="techStack" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Tech Stack
            </label>
            <input 
              id="techStack"
              type="text"
              className="w-full px-4 py-3 rounded-lg text-base text-neutral-700 bg-white border border-neutral-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 placeholder:text-neutral-400"
              placeholder="React, Node.js, PostgreSQL, AWS"
              value={techStack} 
              onChange={e=>setTechStack(e.target.value)} 
            />
            <p className="text-xs text-neutral-500 mt-1.5">
              Comma-separated list of technologies used
            </p>
          </div>

          {/* Hero Image Field */}
          <div>
            <label htmlFor="heroImage" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Hero Image
            </label>
            <input 
              id="heroImage"
              type="file"
              accept="image/*"
              className="block w-full text-sm text-neutral-700 file:mr-4 file:py-2.5 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-accent-50 file:text-accent-700 hover:file:bg-accent-100 file:cursor-pointer cursor-pointer border border-neutral-300 rounded-lg transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
              onChange={handleImageChange} 
            />
            {heroImagePreview && (
              <div className="mt-3 relative w-full h-48 rounded-lg overflow-hidden border border-neutral-200">
                <NextImage 
                  src={heroImagePreview} 
                  alt="Preview" 
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <p className="text-xs text-neutral-500 mt-1.5">
              Upload the main image for this case study (JPG, PNG, GIF)
            </p>
          </div>

          {/* Content Field */}
          <div>
            <label htmlFor="content" className="block text-sm font-medium text-neutral-700 mb-1.5">
              Solution <span className="text-red-500">*</span>
            </label>
            <textarea 
              id="content"
              className="w-full px-4 py-3 rounded-lg text-sm text-neutral-700 bg-white border border-neutral-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 placeholder:text-neutral-400 font-mono resize-vertical min-h-64"
              placeholder="Describe the solution provided (HTML allowed)"
              value={content} 
              onChange={e=>setContent(e.target.value)} 
              required 
            />
            <p className="text-xs text-neutral-500 mt-1.5">
              HTML markup is allowed. Describe how you solved the client&apos;s problem.
            </p>
          </div>

          {/* Form Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-neutral-200">
            <button 
              disabled={saving} 
              type="submit" 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 shadow-sm hover:shadow-base hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {saving ? (
                <>
                  <Loader className="w-4 h-4 animate-spin" />
                  Creating...
                </>
              ) : (
                <>
                  <Save className="w-4 h-4" />
                  Create Case Study
                </>
              )}
            </button>
            <button 
              type="button" 
              onClick={()=>router.push('/admin/case-studies')} 
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-neutral-700 text-sm font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
              disabled={saving}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}