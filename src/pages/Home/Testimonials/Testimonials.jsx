import React, { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useEffect } from "react";

import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import comma from "../../../assets/home/comma.png";

const Testimonials = () => {
  const [reviews, setReviews] = useState();
  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div>
      <section className="my-20 w-9/12 mx-auto ">
        <SectionTitle
          heading="Testimonials"
          subHeading={"What Our Cliend Say"}
        ></SectionTitle>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews?.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 my-16 ">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review?.rating}
                  readOnly
                />
                <img className="pt-8" src={comma} alt="" />
                <p className="py-8 text-center">{review.details}</p>
                <h3 className="text-2xl text-center text-orange-400">
                  {review.name}
                </h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Testimonials;
