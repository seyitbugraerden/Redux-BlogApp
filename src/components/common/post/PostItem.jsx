import React from "react";
import { Link } from "react-router-dom";
import { onTheClick } from "../../../slice/BlogSlice";
import { useDispatch } from "react-redux";

function PostItem({ post }) {
  const dispatch = useDispatch();
  return (
    <div className="card">
      <div className="card-img">
        <img src="https://picsum.photos/900/600" alt="" />
      </div>
      <div className="card-text">
        <h2>{post.title}</h2>
        <p>{post.description}</p>
        <Link to="/detay">
          <button
            className="detail_button"
            onClick={() => {
              dispatch(onTheClick(post.id));
            }}
          >
            İncele<i className="bi bi-arrow-right"></i>
          </button>
        </Link>
      </div>
    </div>
  );
}

export default PostItem;
