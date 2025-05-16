import React from "react";
import { FaUser } from "react-icons/fa";

const BlogCards = ({ blogs, currentPage, pageSize }) => {
  const paginatedBlogs = blogs.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-8 mt-6">
      {paginatedBlogs.map((blog) => (
        <div key={blog.id} className="bg-white p-5 rounded-2xl shadow-lg shadow-orange-100">
          <img src={blog.image} alt={blog.title} className="w-full rounded-2xl h-40 object-cover" />
          <h3 className="mt-4 mb-2 text-lg font-bold hover:text-blue-600 cursor-pointer">{blog.title}</h3>
          <p className="mb-2 text-lg gap-2 text-gray-400 items-center inline-flex">
            <FaUser className="text-gray-500" /> {blog.author}
          </p>
          <p className="text-lg text-gray-500">Published: {blog.published_date}</p>
          <p className="text-lg text-gray-500">Category: {blog.category}</p>
        </div>
      ))}
    </div>
  );
};

export default BlogCards;
