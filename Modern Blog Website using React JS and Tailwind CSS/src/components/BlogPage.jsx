import React, { useEffect } from "react";
import { useState } from "react";
import blogsData from "../api/blogsData.json";
import BlogCards from "./BlogCards";
import Pagination from "./Pagination";
import CategorySelection from "./CategorySelection";
import Sidebar from "./Sidebar";


const BlogPage = () => {
  const [blogs, setBlogs] = useState(blogsData);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 12;
  const [selectedCategory, setSelectedCategory] = useState(null);

  // useeffect woulld have looked like this...

  // useEffect(()=>
  // {
  //   async function fetchBlogs() {
  //     let url =`https://localhost:5000/blogs?pages=${currentPage}&limit=${pageSize}`

  //     if(selectedCategory){
  //       url +='&category=$selectedCategory}';
  //     }
  //     const response =await fetch(url);
  //     const data=await response.json();
  //     setBlogs(data);

  //   }
  //   fetchBlogs();
  // },[currentPage,pageSize,selectedCategory])


   // Filtered blogs based on category selection
   const filteredBlogs = blogs
   .filter((blog) => !selectedCategory || blog.category === selectedCategory)
   .slice((currentPage - 1) * pageSize, currentPage * pageSize);

 // Handle page change
 const handlePageChange = (pageNumber) => {
   setCurrentPage(pageNumber);
 };

 // Handle category change
 const handleCategoryChange = (category) => {
   setSelectedCategory(category);
   setCurrentPage(1); // Reset to page 1 on category change
 };

 useEffect(() => {
   setBlogs(blogsData);
 }, []);

 return (
  <div className="container mx-auto px-4 py-6">
    {/* Category Selection */}
    <CategorySelection handleCategoryChange={handleCategoryChange} selectedCategory={selectedCategory} />

    {/* Blog Cards */}
   <div className="flex flex-col lg:flex-row gap-12">
      {/* blog components */}
   <BlogCards blogs={filteredBlogs} currentPage={currentPage} pageSize={pageSize} />
 

 {/* sidebar components */}
      <div><Sidebar/></div>

   </div>

    {/* Pagination */}
    <Pagination
      handlePageChange={handlePageChange}
      currentPage={currentPage}
      totalBlogs={blogs.filter((blog) => !selectedCategory || blog.category === selectedCategory).length}
      pageSize={pageSize}
    />
  </div>
);
};

export default BlogPage;
