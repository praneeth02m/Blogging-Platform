import React from "react";
import "../App.css";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { id } = useParams();
  const stringifiedBlogList = localStorage.getItem("blogList");
  const parsedBlogList = JSON.parse(stringifiedBlogList);
  const requiredBlog = parsedBlogList.find((each) => each.id === id);
  const { title, author, content, publicationDate } = requiredBlog;
  return (
    <div className="blog-con">
      <div className="incon">
        <h1>{title}</h1>
        <p className="author-para">{author}</p>
        <p className="content-para">{content}</p>
        <p>{publicationDate}</p>
      </div>
    </div>
  );
};

export default BlogPost;
