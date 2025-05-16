import { useEffect, useState } from "react";
import React from "react";
import blogsData from "../api/blogsData.json";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router";

const Sidebar = () => {
  const [popularBlogs, setPopularBlogs] = useState(blogsData);

  useEffect(() => {
    setPopularBlogs(popularBlogs);
  }, []);

  return (
    <div>


{/* latest blogs */}
      <div>
        <h3 className="text-2xl font-semibold px-4 mb-3 text-center">
          Latest Blogs
        </h3>
        <div>
          {popularBlogs.slice(6, 10).map((blog) => (
            <div key={blog.id}
            className="my-5 border-b-1 border-gray-500 border-spacing-2 px-4"
            >
              <h4 className="font-medium ">{blog.title}</h4>
              <Link
                to="/"
                className="text-base hover:text-orange-500 inline-flex my-2 items-center"
              >
                Read Now <FaArrowRight className=" ml-y" />
              </Link>
            </div>
          ))}
        </div>
      </div>  
      
      {/* popular blog */}
      <div className=" mt-12">
        <h3 className="text-2xl font-semibold px-4 mb-3 text-center">
          Popular Blogs
        </h3>
        <div>
          {popularBlogs.slice(24, 30).map((blog) => (
            <div key={blog.id}
            className="my-5 border-b-1 border-gray-500 border-spacing-2 px-4"
            >
              <h4 className="font-medium ">{blog.title}</h4>
              <Link
                to="/"
                className="text-base hover:text-orange-500 inline-flex my-2 items-center"
              >
                Read Now <FaArrowRight className=" ml-y" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
