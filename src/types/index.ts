export interface BlogPost {
    id: string;
    Title: string;
    Slug: string;
    Author: string;
    Date: string;
    Content: string;
    'Featured Image'?: Array<{
      id: string;
      width: number;
      height: number;
      url: string;
      filename: string;
      type: string;
    }>;
    Tags?: string[];
  }