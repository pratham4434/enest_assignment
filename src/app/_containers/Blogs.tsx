import React from "react";
import CardsBlogs from "../_components/CardsBlogs";

function Blogs() {
  return (
    <>
      <div className="flex flex-col items-center py-20">
        <h1 className="text-4xl font-bold mb-8 text-violet-700 text-sans">
          See our blogs
        </h1>
        <CardsBlogs />
      </div>
    </>
  );
}

export default Blogs;
