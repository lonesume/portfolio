import { Swiper, SwiperSlide } from "swiper/react";
import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper's navigation CSS
import { Navigation } from "swiper/modules"; // Correct import path for Navigation module

export default function Projects() {
  return (
    <>
      <Navbar />
      <BodyContainer>
        <p>Projects</p>
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          loop={true} // Enable looping
          navigation={true} // Enable navigation arrows
          modules={[Navigation]} // Register Navigation module
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Slide 1"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Slide 2"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Slide 3"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="https://via.placeholder.com/300x200"
              alt="Slide 4"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        </Swiper>
      </BodyContainer>
    </>
  );
}
