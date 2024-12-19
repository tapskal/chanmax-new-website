// src/lib/airtable.ts
import Airtable from 'airtable';
import { Career } from '@/types';

export const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID!);

export async function getBlogPosts() {
  try {
    const records = await base('Blog Posts').select().all();
    return records.map(record => ({
      id: record.id,
      ...record.fields
    }));
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// src/lib/airtable.ts
export async function getBlogPost(slug: string) {
  try {
    const records = await base('Blog Posts')
      .select({
        filterByFormula: `{Slug} = '${slug}'`
      })
      .firstPage();

    if (!records?.length) return null;

    return {
      id: records[0].id,
      ...records[0].fields
    };
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}


// src/lib/airtable.ts
// ... existing imports and setup ...

export async function getReferences() {
  try {
    const records = await base('References').select().all();
    return records.map(record => ({
      id: record.id,
      ...record.fields
    }));
  } catch (error) {
    console.error('Error fetching references:', error);
    return [];
  }
}

export async function getReference(slug: string) {
  try {
    const records = await base('References')
      .select({
        filterByFormula: `{Slug} = '${slug}'`
      })
      .firstPage();

    if (!records?.length) return null;

    return {
      id: records[0].id,
      ...records[0].fields
    };
  } catch (error) {
    console.error('Error fetching reference:', error);
    return null;
  }
}

// src/lib/airtable.ts
// ... keep existing imports and base setup ...

export async function getTools() {
  try {
    const records = await base('Tools').select().all();
    return records.map(record => ({
      id: record.id,
      ...record.fields
    }));
  } catch (error) {
    console.error('Error fetching tools:', error);
    return [];
  }
}

export async function getTool(slug: string) {
  try {
    const records = await base('Tools')
      .select({
        filterByFormula: `{Slug} = '${slug}'`
      })
      .firstPage();

    if (!records?.length) return null;

    return {
      id: records[0].id,
      ...records[0].fields
    };
  } catch (error) {
    console.error('Error fetching tool:', error);
    return null;
  }
}

// src/lib/airtable.ts
// ... keep existing imports and base setup ...

// Get all careers
export async function getCareers(): Promise<Career[]> {
  try {
    const records = await base('Careers')
      .select({
        filterByFormula: "{Status} = 'Open'", // Only fetch open positions
        sort: [{ field: 'PostedDate', direction: 'desc' }],
      })
      .all();

    return records.map(record => {
      const fields = record.fields as unknown as Partial<Career>; // Safely cast fields to a Partial<Career>
      return {
        id: record.id, // Ensure unique ID from Airtable
        Title: fields.Title ?? '',
        Slug: fields.Slug ?? '',
        Department: fields.Department ?? '',
        Location: fields.Location ?? '',
        Type: fields.Type ?? '',
        Description: fields.Description ?? '',
        Requirements: fields.Requirements ?? '',
        Benefits: fields.Benefits ?? '',
        Excerpt: fields.Excerpt ?? '',
        Status: fields.Status ?? 'Closed',
        PostedDate: fields.PostedDate ?? '',
      };
    });
  } catch (error) {
    console.error('Error fetching careers:', error);
    return [];
  }
}

// Get single career by slug
export async function getCareer(slug: string): Promise<Career | null> {
  try {
    const records = await base('Careers')
      .select({
        filterByFormula: `{Slug} = '${slug}'`,
        maxRecords: 1,
      })
      .all();

    if (records.length === 0) return null;

    const record = records[0];
    const fields = record.fields as unknown as Partial<Career>; // Safely cast fields to a Partial<Career>
    return {
      id: record.id, // Ensure unique ID from Airtable
      Title: fields.Title ?? '',
      Slug: fields.Slug ?? '',
      Department: fields.Department ?? '',
      Location: fields.Location ?? '',
      Type: fields.Type ?? '',
      Description: fields.Description ?? '',
      Requirements: fields.Requirements ?? '',
      Benefits: fields.Benefits ?? '',
      Excerpt: fields.Excerpt ?? '',
      Status: fields.Status ?? 'Closed',
      PostedDate: fields.PostedDate ?? '',
    };
  } catch (error) {
    console.error('Error fetching career:', error);
    return null;
  }
}