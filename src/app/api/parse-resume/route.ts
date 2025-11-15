import { NextRequest, NextResponse } from 'next/server';
// @ts-ignore - pdf-parse-fork doesn't have types
import pdf from 'pdf-parse-fork';

export async function POST(request: NextRequest) {
  try {
    console.log('Starting PDF parse request...');
    
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      console.log('No file provided');
      return NextResponse.json(
        { error: 'No file provided' },
        { status: 400 }
      );
    }

    console.log('File received:', file.name, 'Size:', file.size, 'Type:', file.type);

    // Convert file to buffer
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    console.log('Buffer created, size:', buffer.length);
    
    // Parse PDF
    console.log('Attempting to parse PDF...');
    const data = await pdf(buffer);
    
    console.log('PDF parsed successfully');
    console.log('Pages:', data.numpages);
    console.log('Text length:', data.text.length);

    return NextResponse.json({
      success: true,
      text: data.text,
      pages: data.numpages,
      info: data.info,
      metadata: data.metadata
    });

  } catch (error) {
    console.error('Error parsing PDF:', error);
    console.error('Error stack:', error instanceof Error ? error.stack : 'No stack trace');
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to parse PDF', 
        details: error instanceof Error ? error.message : 'Unknown error',
        stack: error instanceof Error ? error.stack : undefined
      },
      { status: 500 }
    );
  }
}
