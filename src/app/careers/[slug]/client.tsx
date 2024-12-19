// src/app/careers/[slug]/client.tsx
'use client';

import { useState } from 'react';
import { Career } from '@/types';
import Modal from '@/components/ui/Modal';
import ApplicationForm from '@/components/careers/ApplicationForm';

interface CareerDetailClientProps {
  career: Career;
  descriptionHtml: string;
  requirementsHtml: string;
  benefitsHtml: string;
}

export default function CareerDetailClient({ 
  career, 
  descriptionHtml, 
  requirementsHtml, 
  benefitsHtml 
}: CareerDetailClientProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleApplicationSubmit = async (formData: FormData) => {
    try {
      const response = await fetch('/api/applications/submit', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) throw new Error('Failed to submit application');
      setIsModalOpen(false);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <div className="pt-[100px] md:pt-[80px] px-6 flex items-center justify-center">
        <div className='container'>
          <div className="mx-auto max-w-5xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                {career.Title}
              </h1>
              {career.Excerpt && (
                <p className="text-xl text-gray-400 leading-relaxed">
                  {career.Excerpt}
                </p>
              )}
            </div>

            {/* Main Content and Sidebar Grid */}
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                <div className="space-y-12">
                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      About the Role
                    </h2>
                    <div 
                      className="prose prose-invert prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: descriptionHtml }}
                    />
                  </section>

                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Requirements
                    </h2>
                    <div 
                      className="prose prose-invert prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: requirementsHtml }}
                    />
                  </section>

                  <section>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                      Benefits
                    </h2>
                    <div 
                      className="prose prose-invert prose-lg max-w-none"
                      dangerouslySetInnerHTML={{ __html: benefitsHtml }}
                    />
                  </section>
                </div>
              </div>

              {/* Sticky Sidebar */}
              <div className="lg:col-span-4 mt-10 lg:mt-0">
                <div className="sticky top-32">
                  <div className="bg-white/5 rounded-2xl p-6 backdrop-blur-sm">
                    <div className="space-y-4 mb-8">
                      <h3 className="text-lg font-semibold text-white">Job Details</h3>
                      
                      <div className="space-y-3">
                        <div>
                          <div className="text-sm text-gray-400">Department</div>
                          <div className="text-white">{career.Department}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-400">Location</div>
                          <div className="text-white">{career.Location}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-400">Employment Type</div>
                          <div className="text-white">{career.Type}</div>
                        </div>
                        
                        <div>
                          <div className="text-sm text-gray-400">Posted Date</div>
                          <div className="text-white">
                            {new Date(career.PostedDate).toLocaleDateString()}
                          </div>
                        </div>
                      </div>
                    </div>

                    <button 
                      onClick={() => setIsModalOpen(true)}
                      className="block w-full text-center bg-primary hover:bg-primary-light text-secondary 
                              px-6 py-3 rounded-full font-medium transition-all duration-300 
                              hover:-translate-y-1"
                    >
                      Apply for this Position
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={`Apply for ${career.Title}`}
      >
        <ApplicationForm
          career={career}
          onSubmit={handleApplicationSubmit}
          onClose={() => setIsModalOpen(false)}
        />
      </Modal>
    </main>
  );
}