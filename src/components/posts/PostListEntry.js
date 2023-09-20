import React from "react";
import { Link }  from "react-router-dom"
import ReactMarkdown from "react-markdown"
import "./post.css";
const PostListEntry = ({ post }) => {

  return (
    <div className="post-card">
      <div className="">
      <small>{post.date}</small>
        <Link  to={`/posts/${post.id}`}>
        <div id="post-tile" style={{cursor:"pointer", textDecoration:"none"}}> {post.title} </div>
        </Link>
      </div>
    </div>
    
  );
};

export default PostListEntry;
