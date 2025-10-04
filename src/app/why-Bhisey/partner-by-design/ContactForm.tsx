'use client';

import React from 'react';
import { validation, cn } from '@/lib/utils';

export default function ContactForm() {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
    file: null as File | null,
  });
  const [errors, setErrors] = React.useState<Record<string, string>>({});
  const [submitted, setSubmitted] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type, checked } = e.target as HTMLInputElement;
    setForm((prev) => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const onFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] ?? null;
    setForm((prev) => ({ ...prev, file }));
  };

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Name is required';
    if (!validation.email(form.email)) next.email = 'Enter a valid email address';
    if (form.phone && form.phone.trim().length > 0 && !validation.phone(form.phone)) {
      next.phone = 'Enter a valid phone number';
    }
    if (!validation.message(form.message)) next.message = 'Please provide at least 30 characters';
    if (!form.consent) next.consent = 'Consent is required';
    if (form.file) {
      const res = validation.file.validateFile(form.file);
      if (!res.isValid) next.file = res.errors[0] ?? 'Invalid file';
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 800));
    setSubmitting(false);
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-accent-100 bg-white p-6 text-center">
        <h3 className="text-xl font-semibold text-charcoal">Thanks for reaching out!</h3>
        <p className="mt-2 text-charcoal-light">
          Your message has been recorded locally for now. When the backend is enabled, we’ll connect this
          form to submit directly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="space-y-4">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-1 block text-sm font-medium text-charcoal">Name*</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            className="w-full rounded-md border border-accent-100 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-accent-400"
            placeholder="Enter your name"
          />
          {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
        </div>
        <div>
          <label htmlFor="email" className="mb-1 block text-sm font-medium text-charcoal">Email*</label>
          <input
            id="email"
            name="email"
            type="email"
            value={form.email}
            onChange={onChange}
            className="w-full rounded-md border border-accent-100 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-accent-400"
            placeholder="Enter your email"
          />
          {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        <div>
          <label htmlFor="phone" className="mb-1 block text-sm font-medium text-charcoal">Phone number</label>
          <input
            id="phone"
            name="phone"
            value={form.phone}
            onChange={onChange}
            className="w-full rounded-md border border-accent-100 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-accent-400"
            placeholder="Enter your phone number"
          />
          {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
        </div>
        <div>
          <label htmlFor="company" className="mb-1 block text-sm font-medium text-charcoal">Company</label>
          <input
            id="company"
            name="company"
            value={form.company}
            onChange={onChange}
            className="w-full rounded-md border border-accent-100 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-accent-400"
            placeholder="Enter your company name"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="mb-1 block text-sm font-medium text-charcoal">How can we help?*</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={form.message}
          onChange={onChange}
          className="w-full rounded-md border border-accent-100 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-accent-400"
          placeholder="Tell us, how can we help you?"
        />
        {errors.message && <p className="mt-1 text-sm text-red-600">{errors.message}</p>}
      </div>

      <div className="flex items-center gap-4">
        <label className="inline-flex cursor-pointer items-center gap-3">
          <input type="file" onChange={onFileChange} className="text-sm" />
          <span className="text-sm text-charcoal-light">Upload your RFP or relevant files (Optional)</span>
        </label>
        {errors.file && <p className="text-sm text-red-600">{errors.file}</p>}
      </div>

      <div>
        <label className="inline-flex items-start gap-3">
          <input
            id="consent"
            name="consent"
            type="checkbox"
            checked={form.consent}
            onChange={onChange}
            className="mt-1"
          />
          <span className="text-sm text-charcoal">I agree to receive communications from Bhisey Software</span>
        </label>
        {errors.consent && <p className="mt-1 text-sm text-red-600">{errors.consent}</p>}
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          disabled={submitting}
          className={cn(
            'inline-flex items-center justify-center rounded-md bg-accent-500 px-5 py-2.5 text-white shadow-sm',
            'hover:bg-accent-600 focus:outline-none focus:ring-2 focus:ring-accent-400',
            submitting && 'opacity-70'
          )}
        >
          {submitting ? 'Submitting…' : 'Submit'}
          <span aria-hidden className="ml-2">→</span>
        </button>
      </div>
    </form>
  );
}
