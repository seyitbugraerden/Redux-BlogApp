import React from "react";
import "./PostArea.css";
import PostItem from "./PostItem";

function PostArea() {
  return (
    <div className="container">
      <h1 className="black">Latest Post</h1>
      <div className="line"></div>
      <div className="card-area">
        <PostItem />
        <PostItem />
        <PostItem />
      </div>
    </div>
  );
}

export default PostArea;
