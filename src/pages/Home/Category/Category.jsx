import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";
import slide1 from "../../../assets/home/slide1.jpg";
import slide2 from "../../../assets/home/slide2.jpg";
import slide3 from "../../../assets/home/slide3.jpg";
import slide4 from "../../../assets/home/slide4.jpg";
import slide5 from "../../../assets/home/slide5.jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section className="w-9/12 mx-auto my-24">
      <SectionTitle
        subHeading={"From 11:00am to 10:00pm"}
        heading={"Order Now"}
      ></SectionTitle>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide2} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            Pizza
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide3} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            Soups
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide4} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            Desserts
          </h4>
        </SwiperSlide>
        <SwiperSlide>
          <img src={slide5} alt="" />
          <h4 className="text-4xl uppercase text-center -mt-16 text-white">
            Salads
          </h4>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
