"use client";
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import { fetchBlogs } from '@/store/slices/blogsSlice';
import { fetchCaseStudies } from '@/store/slices/caseStudiesSlice';
import { useAppDispatch } from '@/hooks/useStore';
import { FileText, Briefcase, TrendingUp, Clock } from 'lucide-react';
import Link from 'next/link';

export default function AdminDashboard() {
  const dispatch = useAppDispatch();
  const blogs = useSelector((s: RootState)=> s.blogs.items);
  const cases = useSelector((s: RootState)=> s.caseStudies.items);
  const user = useSelector((s: RootState)=> s.auth.user);

  useEffect(()=>{ dispatch(fetchBlogs()); dispatch(fetchCaseStudies()); },[dispatch]);

  // Calculate recent additions (last 7 days)
  const recentBlogs = blogs.filter((b: any) => {
    const created = new Date(b.created_at);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return created >= weekAgo;
  }).length;

  const recentCases = cases.filter((c: any) => {
    const created = new Date(c.created_at);
    const weekAgo = new Date();
    weekAgo.setDate(weekAgo.getDate() - 7);
    return created >= weekAgo;
  }).length;

  return (
    <div className="space-y-8">
      {/* Welcome Card */}
      <div className="bg-white rounded-xl shadow-sm border border-neutral-200 p-8">
        <h1 className="text-3xl font-bold text-neutral-800">Welcome to Admin Dashboard</h1>
        <p className="mt-2 text-base text-neutral-600">
          Hello, <span className="font-semibold text-neutral-800">{user?.email}</span>! Manage your content from here.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Blogs Stat Card */}
        <Link href="/admin/blogs" className="group block">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs hover:shadow-base transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
                <FileText className="w-7 h-7 text-accent-500" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-600 mb-1">Total Blogs</p>
                <p className="text-4xl font-bold text-neutral-800">{blogs.length}</p>
                {recentBlogs > 0 && (
                  <div className="flex items-center gap-1.5 mt-2">
                    <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                    <p className="text-xs text-green-600 font-medium">+{recentBlogs} this week</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>

        {/* Case Studies Stat Card */}
        <Link href="/admin/case-studies" className="group block">
          <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs hover:shadow-base transition-all duration-200 hover:-translate-y-0.5">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                <Briefcase className="w-7 h-7 text-blue-600" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-neutral-600 mb-1">Total Case Studies</p>
                <p className="text-4xl font-bold text-neutral-800">{cases.length}</p>
                {recentCases > 0 && (
                  <div className="flex items-center gap-1.5 mt-2">
                    <TrendingUp className="w-3.5 h-3.5 text-green-600" />
                    <p className="text-xs text-green-600 font-medium">+{recentCases} this week</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Link>
      </div>

      {/* Recent Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Blogs */}
        <section className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-neutral-800 flex items-center gap-2">
              <FileText className="w-5 h-5 text-accent-500" />
              Recent Blogs
            </h2>
            <Link 
              href="/admin/blogs" 
              className="text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
            >
              View all →
            </Link>
          </div>
          {blogs.length === 0 ? (
            <div className="text-center py-8">
              <FileText className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <p className="text-sm text-neutral-500">No blogs yet</p>
              <Link 
                href="/admin/blogs/new"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent-500 text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors"
              >
                Create your first blog
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {blogs.slice(0, 5).map((b: any)=> (
                <li key={b.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors group">
                  <div className="w-2 h-2 bg-accent-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-800 truncate group-hover:text-accent-600 transition-colors">
                      {b.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      <p className="text-xs text-neutral-500">
                        {new Date(b.created_at).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>

        {/* Recent Case Studies */}
        <section className="bg-white rounded-xl shadow-sm border border-neutral-200 p-6">
          <div className="flex items-center justify-between mb-5">
            <h2 className="text-xl font-semibold text-neutral-800 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" />
              Recent Case Studies
            </h2>
            <Link 
              href="/admin/case-studies" 
              className="text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
            >
              View all →
            </Link>
          </div>
          {cases.length === 0 ? (
            <div className="text-center py-8">
              <Briefcase className="w-12 h-12 text-neutral-300 mx-auto mb-3" />
              <p className="text-sm text-neutral-500">No case studies yet</p>
              <Link 
                href="/admin/case-studies/new"
                className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-accent-500 text-white text-sm font-medium rounded-lg hover:bg-accent-600 transition-colors"
              >
                Create your first case study
              </Link>
            </div>
          ) : (
            <ul className="space-y-3">
              {cases.slice(0, 5).map((c: any)=> (
                <li key={c.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors group">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mt-1.5 flex-shrink-0"></div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-neutral-800 truncate group-hover:text-accent-600 transition-colors">
                      {c.title}
                    </p>
                    <div className="flex items-center gap-2 mt-1">
                      <Clock className="w-3 h-3 text-neutral-400" />
                      <p className="text-xs text-neutral-500">
                        {new Date(c.created_at).toLocaleDateString('en-US', { 
                          month: 'short', 
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </section>
      </div>
    </div>
  );
}