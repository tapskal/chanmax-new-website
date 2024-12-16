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