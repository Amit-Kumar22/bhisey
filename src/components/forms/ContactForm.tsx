'use client';

import { useState } from 'react';
import { formsApi, ApiError } from '@/lib/api/client';

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  consent: boolean;
  attachment?: File;
}

interface FormState {
  isSubmitting: boolean;
  isSuccess: boolean;
  error: string | null;
  fileUploading: boolean;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    consent: false,
  });

  const [formState, setFormState] = useState<FormState>({
    isSubmitting: false,
    isSuccess: false,
    error: null,
    fileUploading: false,
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));

    // Clear field error when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file size (15MB limit)
      if (file.size > 15 * 1024 * 1024) {
        setFieldErrors(prev => ({ 
          ...prev, 
          attachment: 'File size must be less than 15MB' 
        }));
        return;
      }

      // Validate file type
      const allowedTypes = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
        'text/plain',
      ];
      
      if (!allowedTypes.includes(file.type)) {
        setFieldErrors(prev => ({ 
          ...prev, 
          attachment: 'Please upload a PDF, Word document, or text file' 
        }));
        return;
      }

      setFormData(prev => ({ ...prev, attachment: file }));
      setFieldErrors(prev => ({ ...prev, attachment: '' }));
    }
  };

  const validateForm = (): boolean => {
    const errors: Record<string, string> = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      errors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message is required';
    } else if (formData.message.trim().length < 30) {
      errors.message = 'Please provide more details (minimum 30 characters)';
    }

    if (!formData.consent) {
      errors.consent = 'You must agree to receive communications';
    }

    setFieldErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true, error: null }));

    try {
      let attachmentToken: string | undefined;

      // Upload file if provided
      if (formData.attachment) {
        setFormState(prev => ({ ...prev, fileUploading: true }));
        
        try {
          const uploadResponse = await formsApi.uploadFile(formData.attachment);
          if (uploadResponse.success && uploadResponse.data) {
            attachmentToken = uploadResponse.data.fileToken;
          }
        } catch (uploadError) {
          console.error('File upload error:', uploadError);
          setFormState(prev => ({ 
            ...prev, 
            error: 'Failed to upload file. Please try again.',
            fileUploading: false,
            isSubmitting: false 
          }));
          return;
        }
        
        setFormState(prev => ({ ...prev, fileUploading: false }));
      }

      // Submit contact form
      const submissionData = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: formData.phone.trim() || undefined,
        company: formData.company.trim() || undefined,
        message: formData.message.trim(),
        consent: formData.consent,
        attachment: attachmentToken,
      };

      const response = await formsApi.submitContactForm(submissionData);

      if (response.success) {
        setFormState(prev => ({ 
          ...prev, 
          isSubmitting: false, 
          isSuccess: true,
          error: null 
        }));
        
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          consent: false,
        });
        setFieldErrors({});
      }

    } catch (error) {
      console.error('Form submission error:', error);
      
      let errorMessage = 'Something went wrong. Please try again.';
      
      if (error instanceof ApiError) {
        switch (error.code) {
          case 'validation_failed':
            errorMessage = 'Please check your input and try again.';
            // Handle field-specific validation errors
            if (error.details?.fieldErrors) {
              setFieldErrors(error.details.fieldErrors);
            }
            break;
          case 'rate_limited':
            errorMessage = 'Too many requests. Please wait a moment and try again.';
            break;
          default:
            errorMessage = error.message;
        }
      }

      setFormState(prev => ({ 
        ...prev, 
        isSubmitting: false, 
        error: errorMessage 
      }));
    }
  };

  const resetForm = () => {
    setFormState({
      isSubmitting: false,
      isSuccess: false,
      error: null,
      fileUploading: false,
    });
  };

  // Success state
  if (formState.isSuccess) {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
          <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
            <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
          </svg>
        </div>
        <h3 className="text-2xl font-bold text-charcoal mb-4">Message Sent Successfully!</h3>
        <p className="text-charcoal-light mb-6">
          Thank you for your message. We will get back to you soon.
        </p>
        <button
          onClick={resetForm}
          className="bg-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-accent-600 transition-colors"
        >
          Send Another Message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Global Error */}
      {formState.error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <div className="flex">
            <svg className="w-5 h-5 text-red-400 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
            </svg>
            <p className="text-red-700 text-sm">{formState.error}</p>
          </div>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name */}
        <div>
          <label htmlFor="name" className="block text-sm font-semibold text-gray-900 mb-2">
            Name *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 ${
              fieldErrors.name ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Your full name"
            required
          />
          {fieldErrors.name && (
            <p className="text-red-500 text-sm mt-1">{fieldErrors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-semibold text-gray-900 mb-2">
            Email *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 ${
              fieldErrors.email ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="your.email@company.com"
            required
          />
          {fieldErrors.email && (
            <p className="text-red-500 text-sm mt-1">{fieldErrors.email}</p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-semibold text-gray-900 mb-2">
            Phone Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            placeholder="+1 (555) 123-4567"
          />
        </div>

        {/* Company */}
        <div>
          <label htmlFor="company" className="block text-sm font-semibold text-gray-900 mb-2">
            Company
          </label>
          <input
            type="text"
            id="company"
            name="company"
            value={formData.company}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
            placeholder="Your company name"
          />
        </div>
      </div>

      {/* Message */}
      <div>
        <label htmlFor="message" className="block text-sm font-semibold text-gray-900 mb-2">
          How can we help? *
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          rows={6}
          className={`w-full px-4 py-3 border rounded-lg text-gray-900 placeholder:text-gray-400 focus:ring-2 focus:ring-accent-500 focus:border-accent-500 ${
            fieldErrors.message ? 'border-red-300' : 'border-gray-300'
          }`}
          placeholder="Please describe your project, requirements, timeline, and any specific questions you have..."
          required
        />
        {fieldErrors.message && (
          <p className="text-red-500 text-sm mt-1">{fieldErrors.message}</p>
        )}
        <p className="text-gray-500 text-sm mt-2">
          Minimum 30 characters ({formData.message.length}/30)
        </p>
      </div>

      {/* File Upload */}
      <div>
        <label htmlFor="attachment" className="block text-sm font-semibold text-gray-900 mb-2">
          Upload your RFP or other relevant files (Optional)
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-accent-500 transition-colors">
          <input
            type="file"
            id="attachment"
            name="attachment"
            onChange={handleFileChange}
            className="hidden"
            accept=".pdf,.doc,.docx,.txt"
          />
          <label
            htmlFor="attachment"
            className="cursor-pointer inline-flex items-center px-4 py-2 bg-gray-100 text-gray-900 rounded-lg hover:bg-gray-200 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M8 4a3 3 0 00-3 3v4a5 5 0 0010 0V7a1 1 0 112 0v4a7 7 0 11-14 0V7a5 5 0 0110 0v4a3 3 0 11-6 0V7a1 1 0 012 0v4a1 1 0 102 0V7a3 3 0 00-3-3z" clipRule="evenodd" />
            </svg>
            Choose File
          </label>
          {formData.attachment && (
            <p className="text-sm text-gray-600 mt-2">
              Selected: {formData.attachment.name}
            </p>
          )}
          {formState.fileUploading && (
            <p className="text-sm text-accent-500 mt-2">Uploading file...</p>
          )}
        </div>
        {fieldErrors.attachment && (
          <p className="text-red-500 text-sm mt-1">{fieldErrors.attachment}</p>
        )}
        <p className="text-gray-500 text-xs mt-2">
          Accepted formats: PDF, Word documents, Text files. Maximum size: 15MB
        </p>
      </div>

      {/* Consent Checkbox */}
      <div>
        <label className="flex items-start space-x-3">
          <input
            type="checkbox"
            name="consent"
            checked={formData.consent}
            onChange={handleInputChange}
            className={`mt-1 h-4 w-4 text-accent-500 focus:ring-accent-500 border-gray-300 rounded ${
              fieldErrors.consent ? 'border-red-300' : ''
            }`}
            required
          />
          <span className="text-sm text-gray-600">
            I agree to receive communications from Bhisey Software *
          </span>
        </label>
        {fieldErrors.consent && (
          <p className="text-red-500 text-sm mt-1">{fieldErrors.consent}</p>
        )}
      </div>

      {/* Submit Button */}
      <div className="pt-4">
        <button
          type="submit"
          disabled={formState.isSubmitting || formState.fileUploading}
          className={`w-full md:w-auto px-8 py-4 rounded-lg font-semibold text-white transition-all ${
            formState.isSubmitting || formState.fileUploading
              ? 'bg-gray-400 cursor-not-allowed'
              : 'bg-accent-500 hover:bg-accent-600 hover:shadow-lg transform hover:-translate-y-0.5'
          }`}
        >
          {formState.isSubmitting ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending Message...
            </span>
          ) : formState.fileUploading ? (
            <span className="flex items-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Uploading File...
            </span>
          ) : (
            'Submit'
          )}
        </button>
      </div>

      {/* Form Help Text */}
      <div className="text-sm text-charcoal-light bg-gray-50 p-4 rounded-lg">
        <p className="font-semibold mb-2">What happens next?</p>
        <ul className="space-y-1">
          <li>• We&apos;ll review your message within 24 hours</li>
          <li>• Our team will respond with relevant expertise</li>
          <li>• We&apos;ll schedule a discovery call to discuss your project</li>
          <li>• You&apos;ll receive a detailed proposal and timeline</li>
        </ul>
      </div>
    </form>
  );
}