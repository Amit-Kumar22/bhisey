# Admin UI Component Showcase
## Visual Reference Guide

**Version:** 1.0  
**Purpose:** Quick visual reference for copy-paste component patterns

---

## 🎯 Color Swatches Reference

### Neutral Scale
```
neutral-50  ▢ #FAFBFC  Lightest backgrounds
neutral-100 ▢ #F4F5F7  Subtle backgrounds, hover states
neutral-200 ▢ #E5E7EB  Borders, dividers
neutral-300 ▢ #D1D5DB  Disabled borders
neutral-400 ▢ #9CA3AF  Placeholder text
neutral-500 ▢ #6B7280  Secondary text
neutral-600 ▢ #4B5563  Body text
neutral-700 ▢ #374151  Primary text, headings
neutral-800 ▢ #1F2937  Strong emphasis
```

### Accent Scale (Brand Orange)
```
accent-50   ▢ #FFF8F1  Very light backgrounds
accent-100  ▢ #FFEDD5  Light backgrounds
accent-500  ▢ #E97817  PRIMARY BRAND ⭐
accent-600  ▢ #C25F05  Hover states
accent-700  ▢ #A04D00  Active/pressed states
```

---

## 🔘 Button Patterns

### Primary Action Button
```tsx
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 shadow-sm hover:shadow-base hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0">
  <Plus className="w-4 h-4" />
  Create New
</button>
```
**Use for:** Primary CTAs, save actions, create actions

### Secondary Button
```tsx
<button className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-transparent text-neutral-700 text-sm font-semibold rounded-lg border border-neutral-300 hover:bg-neutral-50 hover:border-neutral-400 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2">
  Cancel
</button>
```
**Use for:** Cancel actions, secondary options

### Danger/Delete Button
```tsx
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-1">
  <Trash2 className="w-3.5 h-3.5" />
  Delete
</button>
```
**Use for:** Destructive actions

### Text Link Button
```tsx
<Link 
  href="/admin/blogs" 
  className="text-sm font-medium text-accent-600 hover:text-accent-700 transition-colors"
>
  View all →
</Link>
```
**Use for:** Navigation links, "see more" actions

### Small Button (Compact)
```tsx
<button className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-accent-600 hover:text-accent-700 hover:bg-accent-50 rounded-md transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-1">
  <Edit className="w-3.5 h-3.5" />
  Edit
</button>
```
**Use for:** Table actions, inline actions

### Loading Button
```tsx
<button disabled className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white text-sm font-semibold rounded-lg opacity-50 cursor-not-allowed">
  <Loader className="w-4 h-4 animate-spin" />
  Saving...
</button>
```
**Use for:** Async operation states

---

## 📝 Form Elements

### Text Input (Standard)
```tsx
<div>
  <label htmlFor="title" className="block text-sm font-medium text-neutral-700 mb-1.5">
    Title <span className="text-red-500">*</span>
  </label>
  <input 
    id="title"
    type="text"
    className="w-full px-4 py-3 rounded-lg text-base text-neutral-700 bg-white border border-neutral-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 placeholder:text-neutral-400"
    placeholder="Enter title"
  />
  <p className="text-xs text-neutral-500 mt-1.5">Helper text goes here</p>
</div>
```

### Textarea
```tsx
<div>
  <label htmlFor="content" className="block text-sm font-medium text-neutral-700 mb-1.5">
    Content
  </label>
  <textarea 
    id="content"
    rows={8}
    className="w-full px-4 py-3 rounded-lg text-sm text-neutral-700 bg-white border border-neutral-300 transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500 placeholder:text-neutral-400 font-mono resize-vertical"
    placeholder="Enter content"
  />
</div>
```

### Input with Error State
```tsx
<div>
  <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-1.5">
    Email
  </label>
  <input 
    id="email"
    type="email"
    className="w-full px-4 py-3 rounded-lg text-base text-neutral-700 bg-red-50 border-2 border-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 placeholder:text-neutral-400"
    placeholder="you@example.com"
  />
  <div className="flex items-center gap-1.5 text-xs text-red-600 mt-1.5">
    <AlertCircle className="w-3.5 h-3.5" />
    Invalid email format
  </div>
</div>
```

### Select Dropdown
```tsx
<div>
  <label htmlFor="category" className="block text-sm font-medium text-neutral-700 mb-1.5">
    Category
  </label>
  <select 
    id="category"
    className="w-full px-4 py-3 rounded-lg text-base text-neutral-700 bg-white border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
  >
    <option>Select a category</option>
    <option>Technology</option>
    <option>Business</option>
  </select>
</div>
```

### Checkbox
```tsx
<div className="flex items-center gap-2">
  <input 
    type="checkbox" 
    id="featured"
    className="w-4 h-4 rounded border-neutral-300 text-accent-500 focus:ring-2 focus:ring-accent-500 focus:ring-offset-0 transition-colors duration-150"
  />
  <label htmlFor="featured" className="text-sm text-neutral-700">
    Mark as featured
  </label>
</div>
```

---

## 📊 Card Components

### Basic Card
```tsx
<div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
  <h3 className="text-lg font-semibold text-neutral-800 mb-2">Card Title</h3>
  <p className="text-sm text-neutral-600">Card content goes here</p>
</div>
```

### Stat Card (Dashboard)
```tsx
<Link href="/admin/blogs" className="group block">
  <div className="bg-white rounded-xl border border-neutral-200 p-6 shadow-xs hover:shadow-base transition-all duration-200 hover:-translate-y-0.5">
    <div className="flex items-center gap-4">
      <div className="w-14 h-14 rounded-xl bg-accent-50 flex items-center justify-center flex-shrink-0">
        <FileText className="w-7 h-7 text-accent-500" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-neutral-600 mb-1">Total Blogs</p>
        <p className="text-4xl font-bold text-neutral-800">24</p>
        <div className="flex items-center gap-1.5 mt-2">
          <TrendingUp className="w-3.5 h-3.5 text-green-600" />
          <p className="text-xs text-green-600 font-medium">+3 this week</p>
        </div>
      </div>
    </div>
  </div>
</Link>
```

### List Item Card (Clickable)
```tsx
<div className="flex items-start gap-3 p-3 rounded-lg hover:bg-neutral-50 transition-colors group cursor-pointer">
  <div className="w-2 h-2 bg-accent-500 rounded-full mt-1.5 flex-shrink-0"></div>
  <div className="flex-1 min-w-0">
    <p className="text-sm font-medium text-neutral-800 truncate group-hover:text-accent-600 transition-colors">
      Blog Post Title
    </p>
    <div className="flex items-center gap-2 mt-1">
      <Clock className="w-3 h-3 text-neutral-400" />
      <p className="text-xs text-neutral-500">Jan 15, 2025</p>
    </div>
  </div>
</div>
```

---

## 📋 Table Patterns

### Complete Table Structure
```tsx
<div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
  <div className="overflow-x-auto">
    <table className="w-full">
      <thead className="bg-neutral-50 border-b-2 border-neutral-300">
        <tr>
          <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            Title
          </th>
          <th className="px-6 py-4 text-left text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            Status
          </th>
          <th className="px-6 py-4 text-right text-xs font-semibold text-neutral-700 uppercase tracking-wider">
            Actions
          </th>
        </tr>
      </thead>
      <tbody className="divide-y divide-neutral-200">
        <tr className="hover:bg-neutral-50 transition-colors duration-150">
          <td className="px-6 py-4 text-sm font-medium text-neutral-800">
            Row Content
          </td>
          <td className="px-6 py-4">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
              Published
            </span>
          </td>
          <td className="px-6 py-4 text-right">
            <div className="flex items-center justify-end gap-2">
              {/* Action buttons */}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
```

---

## 🎨 State Components

### Loading State (Full Section)
```tsx
<div className="bg-white rounded-xl border border-neutral-200 p-12">
  <div className="flex flex-col items-center justify-center gap-4">
    <div className="w-10 h-10 border-4 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
    <p className="text-sm font-medium text-neutral-600">Loading...</p>
  </div>
</div>
```

### Empty State
```tsx
<div className="bg-white rounded-xl border border-neutral-200 p-12">
  <div className="flex flex-col items-center justify-center text-center">
    <div className="w-16 h-16 bg-neutral-100 rounded-full flex items-center justify-center mb-4">
      <FileText className="w-8 h-8 text-neutral-400" />
    </div>
    <h3 className="text-lg font-semibold text-neutral-800 mb-2">No items yet</h3>
    <p className="text-sm text-neutral-500 mb-6 max-w-sm">
      Get started by creating your first item.
    </p>
    <button className="inline-flex items-center gap-2 px-5 py-2.5 bg-accent-500 text-white text-sm font-semibold rounded-lg hover:bg-accent-600 transition-colors">
      <Plus className="w-4 h-4" />
      Create First Item
    </button>
  </div>
</div>
```

### Inline Loading Spinner
```tsx
<div className="flex items-center gap-2">
  <div className="w-5 h-5 border-2 border-accent-500 border-t-transparent rounded-full animate-spin"></div>
  <span className="text-sm text-neutral-600">Loading...</span>
</div>
```

### Skeleton Loader (Text Lines)
```tsx
<div className="space-y-3">
  <div className="h-4 bg-neutral-200 rounded animate-pulse w-3/4"></div>
  <div className="h-4 bg-neutral-200 rounded animate-pulse w-full"></div>
  <div className="h-4 bg-neutral-200 rounded animate-pulse w-5/6"></div>
</div>
```

---

## 🚨 Alert Components

### Success Alert
```tsx
<div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
  <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <p className="text-sm font-semibold text-green-800 mb-1">Success!</p>
    <p className="text-sm text-green-700">Your changes have been saved.</p>
  </div>
</div>
```

### Error Alert
```tsx
<div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
  <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <p className="text-sm font-semibold text-red-800 mb-1">Error occurred</p>
    <p className="text-sm text-red-700">Please check your inputs and try again.</p>
  </div>
</div>
```

### Warning Alert
```tsx
<div className="flex items-start gap-3 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <p className="text-sm font-semibold text-yellow-800 mb-1">Warning</p>
    <p className="text-sm text-yellow-700">This action cannot be undone.</p>
  </div>
</div>
```

### Info Alert
```tsx
<div className="flex items-start gap-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
  <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
  <div className="flex-1">
    <p className="text-sm font-semibold text-blue-800 mb-1">Information</p>
    <p className="text-sm text-blue-700">Here's some helpful context.</p>
  </div>
</div>
```

---

## 🏷️ Badge Components

### Status Badges
```tsx
{/* Success/Active */}
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-700">
  Published
</span>

{/* Error/Inactive */}
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-50 text-red-700">
  Unpublished
</span>

{/* Warning */}
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-50 text-yellow-700">
  Draft
</span>

{/* Neutral */}
<span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-neutral-100 text-neutral-700">
  Pending
</span>
```

---

## 🧭 Navigation Components

### Breadcrumb
```tsx
<div className="flex items-center gap-2 text-sm">
  <Link 
    href="/admin" 
    className="text-neutral-600 hover:text-accent-600 transition-colors"
  >
    Dashboard
  </Link>
  <span className="text-neutral-400">/</span>
  <Link 
    href="/admin/blogs" 
    className="text-neutral-600 hover:text-accent-600 transition-colors"
  >
    Blogs
  </Link>
  <span className="text-neutral-400">/</span>
  <span className="text-neutral-900 font-medium">New Post</span>
</div>
```

### Back Link
```tsx
<Link 
  href="/admin/blogs" 
  className="flex items-center gap-1 text-sm text-neutral-600 hover:text-accent-600 transition-colors"
>
  <ArrowLeft className="w-4 h-4" />
  Back to Blogs
</Link>
```

### Tab Navigation (Future Use)
```tsx
<div className="border-b border-neutral-200">
  <nav className="flex gap-6">
    <button className="px-1 py-3 text-sm font-medium text-accent-600 border-b-2 border-accent-600">
      Details
    </button>
    <button className="px-1 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-800 border-b-2 border-transparent">
      Settings
    </button>
    <button className="px-1 py-3 text-sm font-medium text-neutral-600 hover:text-neutral-800 border-b-2 border-transparent">
      History
    </button>
  </nav>
</div>
```

---

## 📐 Layout Patterns

### Page Header (Standard)
```tsx
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
  <div>
    <h1 className="text-3xl font-bold text-neutral-800">Page Title</h1>
    <p className="text-sm text-neutral-600 mt-1">Page description or subtitle</p>
  </div>
  <button className="...primary-button">
    Action
  </button>
</div>
```

### Two Column Grid
```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <div className="bg-white rounded-xl border border-neutral-200 p-6">
    Left Column
  </div>
  <div className="bg-white rounded-xl border border-neutral-200 p-6">
    Right Column
  </div>
</div>
```

### Form Layout
```tsx
<div className="max-w-4xl mx-auto space-y-6">
  <div className="bg-white rounded-xl border border-neutral-200 shadow-sm">
    <form className="p-8 space-y-6">
      {/* Form fields */}
      <div className="flex gap-3 pt-4 border-t border-neutral-200">
        {/* Action buttons */}
      </div>
    </form>
  </div>
</div>
```

---

## 🎭 Interaction States

### Hover States
- Buttons: `hover:bg-accent-600 hover:-translate-y-0.5`
- Links: `hover:text-accent-600`
- Cards: `hover:shadow-base`
- Table rows: `hover:bg-neutral-50`

### Focus States (Always Include!)
```tsx
focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2
```

### Disabled States
```tsx
disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0
```

### Active States
```tsx
active:bg-accent-700 active:translate-y-0
```

---

## 🎨 Icon Sizing Guide

```tsx
// Small (16px) - Table actions, inline icons
<Icon className="w-4 h-4" />

// Medium (20px) - Buttons, navigation
<Icon className="w-5 h-5" />

// Large (24px) - Headers, emphasis
<Icon className="w-6 h-6" />

// X-Large (28px) - Stat cards
<Icon className="w-7 h-7" />

// 2X-Large (32px) - Empty states
<Icon className="w-8 h-8" />
```

---

## 📱 Responsive Patterns

### Mobile-First Approach
```tsx
{/* Mobile: stack, Desktop: row */}
<div className="flex flex-col sm:flex-row gap-4">

{/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

{/* Hide on mobile, show on desktop */}
<div className="hidden md:block">

{/* Show on mobile only */}
<div className="block md:hidden">

{/* Full width on mobile, max-width on desktop */}
<button className="w-full sm:w-auto">
```

---

## ✨ Pro Tips

1. **Always include focus states** on interactive elements
2. **Use semantic HTML** (`<button>`, not `<div onClick>`)
3. **Add loading states** for async operations
4. **Truncate long text** with `truncate` or `line-clamp`
5. **Group related items** with proper spacing
6. **Use transitions** for smooth interactions (150-200ms)
7. **Test keyboard navigation** - Tab through your UI
8. **Check mobile responsiveness** at 375px, 768px, 1024px

---

## 🎯 Common Combinations

### Card with Action Header
```tsx
<div className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6">
  <div className="flex items-center justify-between mb-5">
    <h2 className="text-xl font-semibold text-neutral-800">Section Title</h2>
    <Link href="#" className="text-sm font-medium text-accent-600 hover:text-accent-700">
      View all →
    </Link>
  </div>
  {/* Content */}
</div>
```

### Form Field Group
```tsx
<div className="space-y-6">
  {/* Multiple form fields with consistent spacing */}
</div>
```

### Button Group
```tsx
<div className="flex items-center gap-3">
  <button className="...primary">Save</button>
  <button className="...secondary">Cancel</button>
</div>
```

---

**End of Component Showcase** 🎨

Copy any pattern and customize as needed. Keep consistency across all admin pages!
