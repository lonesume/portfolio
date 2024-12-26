import { Swiper, SwiperSlide } from "swiper/react";
import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper's navigation CSS
import { Navigation } from "swiper/modules"; // Correct import path for Navigation module

import pocketGpt from "~/assets/images/projects/pocket-gpt.png";
import weatherApp from "~/assets/images/projects/weather_app_logo.png";
import bridge from "~/assets/images/projects/bridge-chatgpt-logo.png";
import motion from "~/assets/images/projects/motion-capture-emailer-logo.png";
import Image from "next/image";

export default function Projects() {
  return (
    <>
      <Navbar />
      <BodyContainer>
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
            <Image
              // src="https://via.placeholder.com/300x200"
              src={pocketGpt}
              alt="Slide 1"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              // src="https://via.placeholder.com/300x200"
              src={weatherApp}
              alt="Slide 2"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              // src="https://via.placeholder.com/300x200"
              src={bridge}
              alt="Slide 3"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={motion}
              alt="Slide 4"
              style={{ width: "100%", height: "auto" }}
            />
          </SwiperSlide>
        </Swiper>
      </BodyContainer>
    </>
  );
}
