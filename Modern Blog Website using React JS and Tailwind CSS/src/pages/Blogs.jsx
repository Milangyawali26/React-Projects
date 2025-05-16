import React from "react";
import BlogPage from "../components/BlogPage";


const Blogs = () => {
  return (
    <>
      <div className="py-40 bg-black text-center text-white px-4">
        <h2 className="text-5xl mb-5 lg:text-7xl  font-bold ">Blog Page</h2>
      </div>

      {/* all blogs container */}
      <div className="mx-w-7xl mx-auto">
      <BlogPage />
      </div>
    </>
  );
};

export default Blogs;
