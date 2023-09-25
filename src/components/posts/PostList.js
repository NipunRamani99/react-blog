import React from "react";
import postList from "../../posts.json";
import PostListEntry from "./PostListEntry";
import "../../styles/PostList.css";

const PostList = () => {
  return (
    <div className="d-block">
      <div className="me-auto ms-auto mt-3" style={{maxWidth:"800px"}} >
        <div className="px-4">
        <h3>Posts</h3>
          {postList.length &&
            postList.map((post) => {
              return <PostListEntry key={post.id} post={post} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default PostList;
