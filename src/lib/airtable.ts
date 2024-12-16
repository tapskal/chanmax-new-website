// src/lib/airtable.ts
import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
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