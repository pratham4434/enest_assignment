import mongoose, { Schema, Document, Model } from 'mongoose';

// Define Blog interface
export interface IBlog extends Document {
  title1: string;
  title2?: string;
  title3?: string;
  content: string;
  imageUrl?: string;
}

// Create Blog Schema
const BlogSchema: Schema = new Schema({
  title1: { type: String, required: true },
  title2: { type: String },
  title3: { type: String },
  imageUrl: { type: String },
  content: { type: String, required: true },
});

// Create Blog Model
const Blog: Model<IBlog> = mongoose.models.Blog || mongoose.model<IBlog>('Blog', BlogSchema);

export default Blog;
