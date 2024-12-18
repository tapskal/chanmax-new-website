// src/components/layout/Navigation.tsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, X, ChevronRight } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';
import Image from 'next/image';

const navItems = [
  {
    name: 'Services',
    href: '/services',
    submenu: [
      {
        icon: <ChevronRight className="w-4 h-4 text-primary" />,
        title: 'Web Development',
        description: 'Custom web solutions tailored to your needs',
        href: '/services/web-development'
      },
      {
        icon: <ChevronRight className="w-4 h-4 text-primary" />,
        title: 'Performance Marketing',
        description: 'Data-driven marketing strategies',
        href: '/services/performance-marketing'
      },
      {
        icon: <ChevronRight className="w-4 h-4 text-primary" />,
        title: 'Social Media Marketing',
        description: 'Engage and grow your audience',
        href: '/services/social-media'
      },
      {
        icon: <ChevronRight className="w-4 h-4 text-primary" />,
        title: 'SEO',
        description: 'Improve your search visibility',
        href: '/services/seo'
      }
    ]
  },
  {
    name: 'Reference',
    href: '/reference',
  },
  {
    name: 'Company',
    href: '/company',
    submenu: [
      {
        icon: <ChevronRight className="w-4 h-4 text-primary" />,
        title: 'About',
        description: 'Our story and mission',
        href: '/company/about'
      },
      {
        icon: <ChevronRight className="w-4 h-4 text-primary" />,
        title: 'Career',
        description: 'Join our growing team',
        href: '/company/career'
      }
    ]
  },
  {
    name: 'Resources',
    href: '/resources',
    submenu: [
      {
        icon: <ChevronRight className="w-4 h-4 text-primary" />,
        title: 'Tools',
        description: 'Essential tools we use',
        href: '/tools'
      },
      {
        icon: <ChevronRight className="w-4 h-4 text-primary" />,
        title: 'Blog',
        description: 'Latest insights and updates',
        href: '/blog'
      }
    ]
  }
];

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-black/20 backdrop-blur-lg' : 'bg-transparent'
      }`}>
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            {/* Logo and Menu Container */}
            <div className="flex items-center gap-8">
              <Link href="/" className="flex-shrink-0">
                <Image 
                  src="/chanmax-favicon.svg" 
                  alt="Chanmax" 
                  width={200}
                  height={200}
                  className="h-12 w-auto"
                  priority
                />
              </Link>
              
              {/* Main Menu */}
              <div className="hidden lg:flex items-center">
                <div className={`backdrop-blur-sm rounded-full p-1 flex items-center ${
                  isScrolled ? 'bg-white/5' : 'bg-white/10'
                }`}>
                  {navItems.map((item) => (
                    <div
                      key={item.name}
                      onMouseEnter={() => setActiveMenu(item.name)}
                      onMouseLeave={() => setActiveMenu(null)}
                      className="relative"
                    >
                      <Link 
                        href={item.href}
                        className={`px-4 py-2 rounded-full flex items-center gap-1 text-base font-medium text-white
                          ${activeMenu === item.name ? 'bg-white/10' : 'hover:bg-white/10'}`}
                      >
                        {item.name}
                      </Link>
                      
                      {/* Submenu */}
                      {item.submenu && (
                        <AnimatePresence>
                          {activeMenu === item.name && (
                            <motion.div
                              initial={{ opacity: 0, y: 10 }}
                              animate={{ opacity: 1, y: 0 }}
                              exit={{ opacity: 0, y: 10 }}
                              className="absolute top-full left-0 w-72 bg-white rounded-2xl shadow-xl p-3 mt-2"
                            >
                              <div className="grid gap-1">
                                {item.submenu.map((subItem) => (
                                  <Link
                                  key={subItem.title}
                                  href={subItem.href}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-colors"
                                >
                                  <span className="mt-1">{subItem.icon}</span>
                                  <div>
                                    <div className="font-medium text-secondary">
                                      {subItem.title}
                                    </div>
                                    <div className="text-sm text-secondary-500 mt-1">
                                      {subItem.description}
                                    </div>
                                  </div>
                                </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Side Buttons */}
            <div className="hidden lg:flex items-center gap-4">
              <CustomButton variant="secondary" icon={<ArrowRight className="w-4 h-4 text-white" />}>
                Talk to Us
              </CustomButton>
              <CustomButton variant="primary" icon={<ArrowRight className="w-4 h-4 text-primary" />}>
                Get a Quote
              </CustomButton>
            </div>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-white p-2 rounded-full hover:bg-white/10"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', duration: 0.3 }}
            className="fixed inset-0 z-40 lg:hidden bg-black"
          >
            <div className="flex flex-col h-full pt-20 px-4 pb-6">
              {/* Mobile Navigation Items */}
              <div className="flex-1 overflow-y-auto">
                {navItems.map((item) => (
                  <div key={item.name} className="py-2">
                    {item.submenu ? (
                      <>
                        <button
                          onClick={() => setActiveMenu(activeMenu === item.name ? null : item.name)}
                          className="w-full text-left px-4 py-2 text-xl font-medium text-white"
                        >
                          {item.name}
                        </button>
                        
                        <AnimatePresence>
                          {activeMenu === item.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-8 py-2 space-y-2">
                                {item.submenu.map((subItem) => (
                                  <Link
                                    key={subItem.title}
                                    href={subItem.href}
                                    className="block p-2 text-white/80 hover:text-primary"
                                    onClick={() => setIsMobileMenuOpen(false)}
                                  >
                                    <div className="font-medium">{subItem.title}</div>
                                    <div className="text-sm text-white/60">{subItem.description}</div>
                                  </Link>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        href={item.href}
                        className="block px-4 py-2 text-xl font-medium text-white hover:text-primary"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Mobile Menu Bottom Buttons */}
              <div className="space-y-3 mt-6">
                <button className="w-full px-6 py-3 rounded-full bg-white/10 text-white text-center">
                  Talk to Us
                </button>
                <button className="w-full px-6 py-3 rounded-full bg-primary text-secondary text-center">
                  Get a Quote
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}