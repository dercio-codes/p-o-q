import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

export const Stories = () => {
  return (
    <Swiper
      pagination={{
        type: "progressbar",
      }}
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      //   navigation={true}
      modules={[Pagination, Autoplay]}
      className="mySwiper"
      style={{ height: "100%", padding: "21px 0" }}
    >
      {[
        "https://images.pexels.com/photos/1548274/pexels-photo-1548274.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/289262/pexels-photo-289262.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/8956318/pexels-photo-8956318.jpeg?auto=compress&cs=tinysrgb&w=1600",
        "https://images.pexels.com/photos/9039112/pexels-photo-9039112.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/6423097/pexels-photo-6423097.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        "https://images.pexels.com/photos/8712712/pexels-photo-8712712.jpeg?auto=compress&cs=tinysrgb&w=1600",
      ].map((item, index) => {
        return (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url("${item}")`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              // borderRadius: "21px 21px 0 0",
              cursor: "pointer",
              backgroundPostion: "center",
            }}
          ></SwiperSlide>
        );
      })}
    </Swiper>
  );
};
