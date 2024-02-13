import React from "react";
import "./PostArea.css";
import PostItem from "./PostItem";
import { useSelector } from "react-redux";

function PostArea() {
  const data = useSelector((store) => store.blog.data);
  return (
    <div className="container">
      <h1 className="black">Latest Post</h1>
      <div className="line"></div>
      <div className="card-area">
        {data.map((item) => (
          <PostItem key={item.id} post={item} />
        ))}
      </div>
    </div>
  );
}

export default PostArea;
