import React from "react";
import Posts from "../../posts/posts";
import "./post.css";

const Post = ({ posts }) => {
  return (
    <div className="post">
      {posts.map((e) => (
        <Posts post={e} />
      ))}
    </div>
  );
};

export default Post;
