import { connectDB } from '@/app/db/db.config';
import { NextResponse, NextRequest } from 'next/server';

type Blog = {
  id: number;
  title1: string;
  title2: string;
  title3: string;
  content: string;
};

let blogs: Blog[] = []; // In-memory blog store

// GET (Fetch all blogs)
export async function GET() {
  await connectDB();
  return NextResponse.json(blogs); // Return all blogs
}

// POST (Create a new blog)
export async function POST(request: NextRequest) {
  await connectDB();
  const { title1,title2,title3, content } = await request.json();

  if (!title1 || !content) {
    return NextResponse.json({ error: 'Title and content are required' }, { status: 400 });
  }

  const newBlog: Blog = {
    id: blogs.length + 1,
    title1,title2,title3,
    content,
  };

  blogs.push(newBlog); // Add new blog to array
  return NextResponse.json(newBlog, { status: 201 });
}

// DELETE (Delete a blog by ID)
