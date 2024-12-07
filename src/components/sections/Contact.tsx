// src/components/sections/Contact.tsx
'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ArrowRight, Mail, MessageSquare, Phone } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  company: string;
  message: string;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Airtable integration will go here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-b from-[#0A0A0A] to-black">
      {/* Background glows */}
      <div className="absolute inset-0">
        <div className="absolute top-[20%] left-[10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-[20%] right-[10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 md:gap-20 items-start">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
              Let's Power Up Your <span className="text-primary">Digital Vision</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-300 mb-12">
              Ready to transform your business? Get in touch and let's discuss how we can help you achieve digital excellence.
            </p>

            {/* Contact Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Email Us</div>
                  <a href="mailto:hello@chanmax.io" className="text-white hover:text-primary transition-colors">
                    hello@chanmax.io
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">Call Us</div>
                  <a href="tel:+1234567890" className="text-white hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-sm text-gray-400 mb-1">WhatsApp</div>
                  <a href="https://wa.me/1234567890" className="text-white hover:text-primary transition-colors">
                    +1 (234) 567-890
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-400 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="John Doe"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm text-gray-400 mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors"
                    placeholder="Your Company"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-primary/50 transition-colors resize-none"
                    placeholder="Tell us about your project..."
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 rounded-full bg-primary text-black font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
              >
                Send Message
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}