"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";

// Define the Blog type
type Blog = {
  _id: string;
  title1: string;
  title2: string;
  title3: string;
  content: string;
  imageUrl?: string; 
};

function CardsBlogs() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch blogs from the API
    const fetchBlogs = async () => {
      try {
        const response = await axios.get("/api/blogs");
        setBlogs(response.data); // Set the fetched blogs
        setLoading(false);
      } catch (err) {
        console.error("Error fetching blogs:", err);
        setError("Failed to fetch blogs");
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  console.log(blogs);


  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
      {blogs.map((blog) => (
        <div
          key={blog._id}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={blog.imageUrl || "https://via.placeholder.com/400x200"} // Default image if no imageUrl
            alt={blog.title1}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <p className="text-sm text-gray-600 mb-1">{blog.title2}</p>
            <h3 className="text-lg font-semibold my-4">{blog.title1}</h3>
            <p className="text-sm text-gray-600">{blog.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CardsBlogs;
