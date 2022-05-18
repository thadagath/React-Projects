import React from "react";

const BlogCard = ({blog }) => {
  return (
    <div className="blog-card">
      <div className="blog-title"><b>{blog.title} </b></div>
      <div className="blog-body">{blog.body}</div>
      <div className="blog-author">Author : {blog.author}</div>
      <div className="blog-category">Category : {blog.category}</div>
    </div>
  );
};

export default BlogCard;