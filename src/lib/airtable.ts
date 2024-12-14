import Airtable from 'airtable';
import { BlogPost } from '@/types';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID!);

  export async function getBlogPosts(): Promise<BlogPost[]> {
    try {
      const records = await base('Blog Posts').select().all();
      
      // Debug log to see the raw data
      console.log('Raw Airtable Records:', 
        JSON.stringify(records.map(r => ({
          id: r.id,
          fields: r.fields
        })), null, 2)
      );
  
      return records.map(record => {
        const fields = record.fields;
        console.log('Processing record:', fields);
        
        // Check Featured Image field specifically
        if (fields.Featured_Image) {
          console.log('Featured Image data:', fields.Featured_Image);
        }
  
        return {
          id: record.id,
          ...fields
        };
      }) as BlogPost[];
    } catch (error) {
      console.error('Error fetching blog posts:', error);
      return [];
    }
  }

export async function getBlogPost(id: string): Promise<BlogPost | null> {
  try {
    const record = await base('Blog Posts').find(id);
    return {
      id: record.id,
      ...record.fields
    } as BlogPost;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}