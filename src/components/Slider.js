import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { Books } from "./SliderDetail";

import "./styles.css";

// import required modules
import { Autoplay, Navigation, Pagination } from "swiper";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {Books.map((Book) => (
          <SwiperSlide style={{ backgroundImage: `url(${Book.image})` }}>
            <p className="text">{Book.name}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
