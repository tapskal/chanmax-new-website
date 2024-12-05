// src/components/layout/Navigation.tsx
'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { User, ArrowRight, ChevronDown, Menu } from 'lucide-react';
import CustomButton from '@/components/ui/CustomButton';

const navItems = [
  {
    name: 'Services',
    href: '/services',
    submenu: [
      {
        icon: '■',
        title: 'Web Development',
        description: 'Custom web solutions tailored to your needs',
        href: '/services/web-development'
      },
      {
        icon: '▲',
        title: 'Performance Marketing',
        description: 'Data-driven marketing strategies',
        href: '/services/performance-marketing'
      },
      {
        icon: '●',
        title: 'Social Media Marketing',
        description: 'Engage and grow your audience',
        href: '/services/social-media'
      },
      {
        icon: '◆',
        title: 'SEO',
        description: 'Improve your search visibility',
        href: '/services/seo'
      }
    ]
  },
  // Add other menu items...
];

export default function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto px-4">
        <nav className="flex items-center justify-between h-20">
          {/* Logo and Menu Container */}
          <div className="flex items-center gap-8">
            <Link href="/" className="flex-shrink-0">
              <img src="/logo.svg" alt="Chanmax" className="h-8" />
            </Link>
            
            {/* Main Menu */}
            <div className="hidden lg:flex items-center">
              <div className="bg-white/5 backdrop-blur-sm rounded-full p-1 flex items-center">
                {navItems.map((item) => (
                  <div
                    key={item.name}
                    onMouseEnter={() => setActiveMenu(item.name)}
                    onMouseLeave={() => setActiveMenu(null)}
                    className="relative"
                  >
                    <button className={`px-4 py-2 rounded-full flex items-center gap-1 text-sm font-medium text-white
                      ${activeMenu === item.name ? 'bg-white/10' : 'hover:bg-white/10'}`}>
                      {item.name}
                      {item.submenu && <ChevronDown className="w-4 h-4" />}
                    </button>
                    
                    {/* Submenu */}
                    <AnimatePresence>
                      {activeMenu === item.name && item.submenu && (
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
                                <span className="text-primary text-lg mt-1">{subItem.icon}</span>
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
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <CustomButton variant="secondary" icon={<User className="w-4 h-4" />}>
              Login
            </CustomButton>
            <CustomButton variant="primary" icon={<ArrowRight className="w-4 h-4" />}>
              Get Started
            </CustomButton>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden text-white">
            <Menu size={24} />
          </button>
        </nav>
      </div>
    </header>
  );
}