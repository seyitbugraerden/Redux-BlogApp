import React from "react";
import { Link } from "react-router-dom";

function PostItem({ post }) {
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://picsum.photos/900/600" alt="" />
      </div>
      <div className="card-text">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <Link to={`/detay/${post.id}`}>
          <button className="detail_button">
            İncele<i className="bi bi-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostItem;
