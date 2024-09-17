import { NextResponse, NextRequest } from "next/server";
import { connectDB } from "@/app/db/db.config";
import Blog from "@/app/models/blog";

// DELETE request to remove a blog by ID
import mongoose from "mongoose";

// DELETE request to remove a blog by ID
export async function DELETE(request: NextRequest, { params }: { params: { id: string } }) {
  await connectDB();
  
  const { id } = params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return NextResponse.json({ error: "Invalid blog ID" }, { status: 400 });
  }

  try {
    const deletedBlog = await Blog.findByIdAndDelete(id);
    if (!deletedBlog) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    return NextResponse.json({ message: "Blog deleted successfully" }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Failed to delete blog" }, { status: 500 });
  }
}

