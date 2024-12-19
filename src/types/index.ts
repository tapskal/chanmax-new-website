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
// src/types/index.ts
// ... keep existing types ...

export interface Tool {
  id: string;
  Title: string;
  Slug: string;
  Description: string;
  Category: string;
  'Featured Image'?: Array<{
    url: string;
    filename: string;
    type: string;
  }>;
  Features?: string;
  Link?: string;
  Excerpt?: string;
}


export interface Career {
  id: string;
  Title: string;
  Slug: string;
  Department: string;
  Location: string;
  Type: string; // Full-time, Part-time, etc.
  Description: string;
  Requirements: string;
  Benefits: string;
  Excerpt?: string;
  Status: string; // Open, Closed
  PostedDate: string;
}

// src/types/index.ts
// ... other types

export interface Application {
  id: string;
  Name: string;
  Email: string;
  Phone: string;
  'Current Role'?: string;
  'Cover Letter'?: string;
  Position: string;
  Resume?: Array<{
    url: string;
    filename: string;
    type: string;
  }>;
  Status: 'New' | 'Reviewing' | 'Interview' | 'Offered' | 'Rejected';
  'Submission Date': string;
}