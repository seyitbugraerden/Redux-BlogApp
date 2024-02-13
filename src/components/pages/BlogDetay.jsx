import React from "react";
import HeaderArea from "../common/header/header";
import { useSelector } from "react-redux";

function BlogDetay() {
  const selectedData = useSelector((store) => store.blog.selectedData);
  return (
    <>
      <HeaderArea />
      <div style={{ textAlign: "center" }}>
        <h2>{selectedData.title}</h2>
        <p>{selectedData.description}</p>
      </div>
    </>
  );
}

export default BlogDetay;
