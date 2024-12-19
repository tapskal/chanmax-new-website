'use client';

import { useState } from 'react';
import { Career } from '@/types';
import { Loader2 } from 'lucide-react';

interface ApplicationFormProps {
  career: Career;
  onSubmit: (formData: FormData) => Promise<void>;
  onClose: () => void;
}

export default function ApplicationForm({ career, onSubmit, onClose }: ApplicationFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Add the handleSubmit function here
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    const form = e.currentTarget;
    const formData = new FormData(form);
    const resumeFile = formData.get('resume') as File;
    
    // Check file size before submitting
    if (resumeFile.size > 2 * 1024 * 1024) {
      setError('File size too large. Please upload a file under 2MB.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Add the position to formData
      formData.append('position', career.Title);
      const response = await fetch('/api/applications/submit', {
        method: 'POST',
        body: formData
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit application');
      }
      
      onClose();
    } catch (error) {
      console.error('Error:', error);
      setError(error instanceof Error ? error.message : 'Failed to submit application');
    } finally {
      setIsSubmitting(false);
    }
  };
return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Error Message */}
      {error && (
        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-lg text-red-500">
          {error}
        </div>
      )}

      {/* Full Name */}
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
          Full Name *
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                   placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="John Doe"
        />
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
          Email Address *
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                   placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="john@example.com"
        />
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-200 mb-2">
          Phone Number *
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          required
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                   placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="+1 (555) 000-0000"
        />
      </div>

      {/* Current Role */}
      <div>
        <label htmlFor="currentRole" className="block text-sm font-medium text-gray-200 mb-2">
          Current Role & Company
        </label>
        <input
          type="text"
          id="currentRole"
          name="currentRole"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                   placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary"
          placeholder="Senior Developer at Tech Co."
        />
      </div>

      {/* Resume Upload */}
<div>
  <label htmlFor="resume" className="block text-sm font-medium text-gray-200 mb-2">
    Resume/CV * <span className="text-sm text-gray-400">(PDF or Word doc, max 2MB)</span>
  </label>
  <input
    type="file"
    id="resume"
    name="resume"
    required
    accept=".pdf,.doc,.docx"
    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
             file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0
             file:text-sm file:font-semibold file:bg-primary file:text-secondary
             hover:file:bg-primary-light"
  />
  <p className="mt-2 text-sm text-gray-400">
    Please ensure your file is under 2MB in size
  </p>
</div>

      {/* Cover Letter */}
      <div>
        <label htmlFor="coverLetter" className="block text-sm font-medium text-gray-200 mb-2">
          Cover Letter
        </label>
        <textarea
          id="coverLetter"
          name="coverLetter"
          rows={4}
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white 
                   placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary
                   resize-y"
          placeholder="Tell us why you're interested in this role..."
        />
      </div>

      {/* Submit Buttons */}
      <div className="flex justify-end gap-4 pt-4">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-3 rounded-full text-gray-300 hover:text-white transition-colors"
        >
          Cancel
        </button>
        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center justify-center gap-2 px-6 py-3 rounded-full 
                   bg-primary hover:bg-primary-light text-secondary font-medium 
                   transition-all duration-300 disabled:opacity-50 min-w-[140px]"
        >
          {isSubmitting ? (
            <>
              <Loader2 size={18} className="animate-spin" />
              Submitting...
            </>
          ) : (
            'Submit Application'
          )}
        </button>
      </div>
    </form>
  );
}