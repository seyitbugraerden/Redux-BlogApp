import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./CustomSwiper.css";

function CustomSwiper() {
  return (
    <div className="container" id="mySwiper">
      <h1>What's in my Blog?</h1>
      <div className="line"></div>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="text-area">
            <h2>Lorem ipsum dolor sit amet.</h2>
          </div>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/600/600" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CustomSwiper;
