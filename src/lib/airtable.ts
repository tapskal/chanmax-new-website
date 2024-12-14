import Airtable from 'airtable';

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY })
  .base(process.env.AIRTABLE_BASE_ID!);

// Blog Posts
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

// Case Studies
export async function getCaseStudies() {
  try {
    const records = await base('Case Studies').select().all();
    return records.map(record => ({
      id: record.id,
      ...record.fields
    }));
  } catch (error) {
    console.error('Error fetching case studies:', error);
    return [];
  }
}

// Contact Form Submission
export async function submitContactForm(data: {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}) {
  try {
    const records = await base('Contact Forms').create([
      {
        fields: {
          Name: data.name,
          Email: data.email,
          Phone: data.phone,
          Company: data.company,
          Message: data.message,
          Status: 'New',
          'Date Submitted': new Date().toISOString()
        }
      }
    ]);
    return records[0];
  } catch (error) {
    console.error('Error submitting form:', error);
    throw error;
  }
}

// Tools
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

// Careers
export async function getCareers() {
  try {
    const records = await base('Careers')
      .select({
        filterByFormula: "{Status} = 'Open'"
      })
      .all();
    return records.map(record => ({
      id: record.id,
      ...record.fields
    }));
  } catch (error) {
    console.error('Error fetching careers:', error);
    return [];
  }
}