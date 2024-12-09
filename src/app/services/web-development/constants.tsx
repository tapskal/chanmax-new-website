'use client';

import { ReactNode } from 'react';
import { 
  Cpu, 
  Rocket, 
  LineChart, 
  Globe, 
  ShoppingCart, 
  Smartphone,
  Layout,
  Settings,
  Code
} from 'lucide-react';

// Define types for our data
interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

interface Service {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  image: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
  icon: ReactNode;
}

interface FAQ {
  question: string;
  answer: string;
}

export const features: Feature[] = [
  {
    icon: <Cpu className="w-6 h-6" />,
    title: 'High-Performance Architecture',
    description: 'Lightning-fast load times and seamless user experiences powered by cutting-edge technology.'
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: 'Scalable Solutions',
    description: 'Future-proof applications that grow with your business needs.'
  },
  {
    icon: <LineChart className="w-6 h-6" />,
    title: 'Conversion-Focused Design',
    description: 'Strategic layouts and user flows that drive engagement and conversions.'
  }
];

export const services: Service[] = [
  {
    icon: <Globe className="w-8 h-8" />,
    title: 'Custom Web Development',
    description: 'Tailored web solutions that perfectly align with your business goals and user needs.',
    features: [
      'Responsive Design',
      'Custom Functionality',
      'Performance Optimization',
      'User Experience Focus'
    ],
    image: "https://images.pexels.com/photos/3182774/pexels-photo-3182774.jpeg"
  },
  // ... other services
];

export const processSteps: ProcessStep[] = [
  {
    number: '01',
    title: 'Discovery & Planning',
    description: 'Deep dive into your requirements, goals, and target audience to create a comprehensive development strategy.',
    icon: <Layout className="w-6 h-6" />
  },
  // ... other steps
];

export const faqs: FAQ[] = [
  {
    question: "What's your web development process?",
    answer: "Our power-charged development process includes discovery, planning, design, development, testing, and launch phases. We maintain transparent communication throughout to ensure your vision is perfectly executed."
  },
  // ... other FAQs
];