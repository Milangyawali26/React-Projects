import React, { useState, useEffect } from "react";
import BlogPost from "./BlogPost";

function Blogs() {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  //pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexofFirstpost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexofFirstpost, indexOfLastPost);
  const totalPages = Math.ceil(blogs.length / postsPerPage);

  // handlers page navigation
  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <section className="blog">
      <header>
        <h2 className="h2 article-title">Blogs</h2>
      </header>

      <div className="blog-posts  ">
        <ul className="blog-post-list grid md:grid-cols-2 gap-2">
          {currentPosts.map((post, index) => (
            <BlogPost key={index} post={post} />
          ))}
        </ul>
      </div>

      {/* paginations */}
      <nav className="">
        <ul className="pagination flex flex-row text-white list-none p-0 justify-center gap-4">
          <li
            className={`page-item     ${currentPage === 1 ? "disabled" : ""}`}
          >
            <button
              onClick={handlePrev}
              disabled={currentPage === 1}
              className="page-link"
            >
              Previous
            </button>
          </li>
          {Array.from(
            { length: totalPages },
            (_, index) => (
              <li
                className={`page-item ${
                  currentPage === index + 1 ? "active" : ""
                }`}
                key={index}
              >
                <button
                  onClick={() => handlePageClick(index + 1)}
                  className="page-link"
                >
                  {index + 1}
                </button>
              </li>
            )
          )}
          <li
            className={`page-item ${
              currentPage === Math.ceil(blogs.length / postsPerPage)
                ? "disabled"
                : ""
            }`}
          >
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages}
              className="page-link"
            >
              Next
            </button>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Blogs;
