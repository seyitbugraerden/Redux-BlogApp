import React from "react";
import HeaderArea from "../common/header/header";
import PersonCard from "../common/PersonelCard/PersonCard";
import CustomSwiper from "../common/Swiper/CustomSwiper";
import PostArea from "../common/post/PostArea";

function BlogMain() {
  return (
    <>
      <HeaderArea />
      <PersonCard />
      <CustomSwiper />
      <PostArea />
    </>
  );
}

export default BlogMain;
