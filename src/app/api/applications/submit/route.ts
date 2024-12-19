// src/app/api/applications/submit/route.ts
import { NextResponse } from 'next/server';
import { base } from '@/lib/airtable';
import { writeFile } from 'fs/promises';
import path from 'path';

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    
    // Get file
    const resumeFile = formData.get('resume') as File;
    if (!resumeFile) {
      return NextResponse.json(
        { success: false, error: 'Resume is required' },
        { status: 400 }
      );
    }

    // Generate unique filename
    const timestamp = Date.now();
    const filename = `${timestamp}-${resumeFile.name}`;
    const publicPath = path.join(process.cwd(), 'public', 'uploads', filename);
    
    // Save file
    const bytes = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(bytes);
    await writeFile(publicPath, buffer);

    // Create URL for file
    const fileUrl = `/uploads/${filename}`;

    // Format date for Airtable (YYYY-MM-DD)
    const today = new Date();
    const submissionDate = today.toISOString().split('T')[0];

    // Create record in Airtable
    const record = await base('Applications').create([
      {
        fields: {
          'Name': formData.get('name') as string,
          'Email': formData.get('email') as string,
          'Phone': formData.get('phone') as string,
          'Current Role': formData.get('currentRole') as string,
          'Cover Letter': formData.get('coverLetter') as string,
          'Position': formData.get('position') as string,
          'Resume URL': fileUrl,
          'Status': 'New',
          'Submission Date': submissionDate, // YYYY-MM-DD
        },
      },
    ]);
    

    return NextResponse.json({ 
      success: true, 
      message: 'Application submitted successfully' 
    });

  } catch (error) {
    console.error('Error submitting application:', error);
    console.log('Detailed error:', JSON.stringify(error, null, 2));
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}