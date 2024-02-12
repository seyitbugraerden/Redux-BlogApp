import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

function CustomSwiper() {
  return (
    <div className="container">
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://picsum.photos/200/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/200/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/200/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/200/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/200/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/200/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/200/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/200/300" alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://picsum.photos/200/300" alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CustomSwiper;
