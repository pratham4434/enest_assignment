import { connectDB } from '@/app/db/db.config';
import { NextResponse, NextRequest } from 'next/server';
import Blog from '@/app/models/blog';

// GET (Fetch all blogs)
export async function GET() {
  await connectDB();

  try {
    const blogs = await Blog.find(); 
    return NextResponse.json(blogs); 
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Failed to fetch blogs" }, { status: 500 });
  }
}

// POST (Create a new blog)
export async function POST(request: NextRequest) {
  await connectDB();

  try {
    const { title1, title2, title3, content } = await request.json();

    // Validate 
    if (!title1 || !content) {
      return NextResponse.json(
        { error: "Title and content are required" },
        { status: 400 }
      );
    }

    // new blog document
    const newBlog = new Blog({
      title1,
      title2,
      title3,
      content,
    });

    // Save new blog 
    await newBlog.save();

    return NextResponse.json(newBlog, { status: 201 });
  } catch (error) {
    console.error("Error creating blog:", error);
    return NextResponse.json({ error: "Failed to create blog" }, { status: 500 });
  }
}
