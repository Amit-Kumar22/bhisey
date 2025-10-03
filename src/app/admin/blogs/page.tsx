"use client";
import { useEffect, useState } from 'react';
import { useAppDispatch, useAppSelector } from '@/hooks/useStore';
import { fetchBlogs, deleteBlog, Blog } from '@/store/slices/blogsSlice';
import { RootState } from '@/store';
import Link from 'next/link';
import { Plus, Edit, Trash2, FileText, AlertTriangle } from 'lucide-react';

export default function AdminBlogsPage() {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((s: RootState) => s.blogs);
  const [confirmId, setConfirmId] = useState<string | null>(null);

  useEffect(() => { dispatch(fetchBlogs()); }, [dispatch]);

  const onDelete = async (id: string) => {
    if (confirmId !== id) { 
      setConfirmId(id); 
      return; 
    }
    await dispatch(deleteBlog(id));
    setConfirmId(null);
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-neutral-800">Blogs</h1>
          <p className="text-sm text-neutral-600 mt-1">Manage your blog posts</p>
        </div>
        <Link 
          href="/admin/blogs/new" 
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 shadow-sm hover:shadow-base hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2"
        >
          <Plus className="w-4 h-4" />
          New Blog
        </Link>
      </div>

      {/* Loading State */}
      {status === 'loading' && (
        <div className="bg-white rounded-xl border border-neutral-200 p-12">
          <div className="flex flex-col items-center justify-center gap-4">
            <div className="w-10 h-10 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-sm font-medium text-neutral-600">Loading blogs...</p>
          </div>
        </div>
      )}

      {/* Empty State */}
      {!items.length && status !== 'loading' && (
        <div className="bg-white rounded-xl border border-neutral-200 p-12">
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
              <FileText className="w-8 h-8 text-neutral-400" />
            </div>
            <h3 className="text-lg font-semibold text-neutral-800 mb-2">No blog posts yet</h3>
            <p className="text-sm text-neutral-500 mb-6 max-w-sm">
              Get started by creating your first blog post to share with your audience.
            </p>
            <Link 
              href="/admin/blogs/new"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 transition-colors"
            >
              <Plus className="w-4 h-4" />
              Create First Blog
            </Link>
          </div>
        </div>
      )}

      {/* Table */}
      {items.length > 0 && status !== 'loading' && (
        <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-neutral-50 border-b-2 border-neutral-300">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                    Slug
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                    Excerpt
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                    Created
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold text-neutral-700 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-neutral-200">
                {items.map((b: Blog) => (
                  <tr key={b.id} className="hover:bg-neutral-50 transition-colors duration-150">
                    <td className="px-6 py-4 text-sm font-medium text-neutral-800 max-w-xs truncate">
                      {b.title}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600 font-mono">
                      {b.slug}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-500 max-w-md truncate">
                      {b.excerpt || (b.body && b.body.length > 100 ? b.body.substring(0, 100) + '...' : b.body) || '-'}
                    </td>
                    <td className="px-6 py-4 text-sm text-neutral-600 whitespace-nowrap">
                      {new Date(b.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric'
                      })}
                    </td>
                    <td className="px-6 py-4 text-right whitespace-nowrap">
                      <div className="flex items-center justify-end gap-2">
                        <Link 
                          href={`/admin/blogs/${b.slug}/edit`}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 hover:bg-accent-50 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1"
                        >
                          <Edit className="w-3.5 h-3.5" />
                          Edit
                        </Link>
                        <button 
                          onClick={() => onDelete(b.id)}
                          className={`inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 ${
                            confirmId === b.id 
                              ? 'bg-red-100 text-red-700 hover:bg-red-200 font-semibold focus:ring-red-500' 
                              : 'text-red-600 hover:text-red-700 hover:bg-red-50 focus:ring-red-500'
                          }`}
                        >
                          {confirmId === b.id ? (
                            <>
                              <AlertTriangle className="w-3.5 h-3.5" />
                              Confirm?
                            </>
                          ) : (
                            <>
                              <Trash2 className="w-3.5 h-3.5" />
                              Delete
                            </>
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}