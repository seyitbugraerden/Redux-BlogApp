import React from "react";
import HeaderArea from "../common/header/header";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BlogDetay() {
  const { id } = useParams();
  const data = useSelector((state) => state.blog.data);
  return (
    <>
      <HeaderArea />
      <div style={{ textAlign: "center" }}>{data[id - 1].title}</div>
    </>
  );
}

export default BlogDetay;
