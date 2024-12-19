import { v2 as cloudinary } from 'cloudinary';
import { NextResponse } from 'next/server';
import { base } from '@/lib/airtable';
import streamifier from 'streamifier'; // Import streamifier for converting buffer to stream

// Define the structure of the Airtable record
interface AirtableApplicationRecord {
  fields: {
    Name: string;
    Email: string;
    Phone: string;
    'Current Role': string;
    'Cover Letter': string;
    Position: string;
    'Resume URL': string;
    Status: string;
    'Submission Date': string;
  };
}

// Configure Cloudinary
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

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

    // Convert file to buffer
    const bytes = await resumeFile.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Convert buffer to readable stream using streamifier
    const stream = streamifier.createReadStream(buffer);

    // Upload file to Cloudinary using the stream
    const uploadResult = await new Promise<any>((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {
          folder: 'uploads', // Optional: Folder in Cloudinary
          resource_type: 'auto', // Automatically detect file type
        },
        (error, result) => {
          if (error) {
            reject(error);
          } else {
            resolve(result);
          }
        }
      );

      // Pipe the streamified buffer to Cloudinary
      stream.pipe(uploadStream);
    });

    // Format date for Airtable (YYYY-MM-DD)
    const today = new Date();
    const submissionDate = today.toISOString().split('T')[0];

    // Create record in Airtable
    const record: AirtableApplicationRecord = {
      fields: {
        Name: formData.get('name') as string,
        Email: formData.get('email') as string,
        Phone: formData.get('phone') as string,
        'Current Role': formData.get('currentRole') as string,
        'Cover Letter': formData.get('coverLetter') as string,
        Position: formData.get('position') as string,
        'Resume URL': (uploadResult as any).secure_url, // Cast uploadResult to get the correct type
        Status: 'New',
        'Submission Date': submissionDate, // YYYY-MM-DD format
      },
    };

    // Insert the record into Airtable
    const airtableRecord = await base('Applications').create([record]);

    return NextResponse.json({
      success: true,
      message: 'Application submitted successfully',
    });
  } catch (error) {
    console.error('Error submitting application:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit application' },
      { status: 500 }
    );
  }
}
