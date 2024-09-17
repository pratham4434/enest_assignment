import mongoose, { Schema, model, models } from "mongoose";

const blogSchema = new Schema({
  title1: {
    type: String,
    required: true,
  },
  title2: {
    type: String,
    required: true,
  },
  title3: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
});

const Blog = models.Blog || model("Blog", blogSchema);

export default Blog;
