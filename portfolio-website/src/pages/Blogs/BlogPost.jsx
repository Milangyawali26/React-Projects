import React from "react";
import './Blogs.css'

const BlogPost = ({ post }) => {
  console.log(post);
  const { title, category, image, description, date } = post;
  return (
    <li className="blog-post-item">
      <a href="#">
        <figure className="blog-banner-box">
          <img src={image} alt="" loading="lazy" />
        </figure>
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-categoty">{category}</p>
            <span className="dot"></span>
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="h3 blog-item-title">{title}</h3>
          <p className="blog-text"> {description}</p>
        </div>
      </a>
    </li>
  );
};

export default BlogPost;
