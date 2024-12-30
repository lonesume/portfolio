import { Swiper, SwiperSlide } from "swiper/react";
import BodyContainer from "~/components/body-container";
import Navbar from "~/components/navbar";
import "swiper/css";
import "swiper/css/navigation"; // Import Swiper's navigation CSS
import { Navigation } from "swiper/modules"; // Correct import path for Navigation module
import Image from "next/image";
import Link from "next/link";
import { details } from "../../utils/projects";

const renderProjects = () => {
  return details.map((detail) => {
    return (
      <SwiperSlide key={detail.projectName}>
        <Link href={`/projects/${detail.id}`}>
          <Image
            src={detail.imageUrl}
            alt={detail.projectName}
            objectFit="cover"
            width={1024} // Use numbers for width and height
            height={1024}
          />
        </Link>
      </SwiperSlide>
    );
  });
};

export default function Projects() {
  return (
    <>
      <Navbar />
      <BodyContainer>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          loop={true}
          navigation={true}
          modules={[Navigation]}
          onSlideChange={() => console.log("slide change")}
          onSwiper={(swiper) => console.log(swiper)}
        >
          {renderProjects()}
        </Swiper>
      </BodyContainer>
    </>
  );
}
