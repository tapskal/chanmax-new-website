// src/types/index.ts
export interface BlogPost {
  id: string;
  Title: string;
  Slug: string;
  Content: string;
  Author: string;
  Date: string;
  Tags?: string[];
  Excerpt?: string;  // Added Excerpt field
  'Featured Image'?: Array<{
    url: string;
    filename: string;
    type: string;
  }>;
}

// src/types/index.ts
export interface Reference {
  id: string;
  Title: string;
  Slug: string;
  Client: string;
  Industry: string;
  Challenge: string;
  Solution: string;
  Results: string;
  Excerpt?: string;  // Added Excerpt field
  Metrics?: {
    value: string;
    label: string;
  }[];
  'Featured Image'?: Array<{
    url: string;
    filename: string;
    type: string;
  }>;
}