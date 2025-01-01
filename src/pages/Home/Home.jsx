import React from "react";
import Banner from "./Banner/Banner";
import Category from "./Category/Category";
import PopularManue from "./PopularManue/PopularManue";
import Featured from "./Featured/Featured";
import Testimonials from "./Testimonials/Testimonials";
import BistroBoss from "./BistroBoss/BistroBoss";
import Contact from "./Contact/Contact";
import Recommends from "./Recommendations/Recommends";
import { Helmet } from "react-helmet-async";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <div>
        <Banner></Banner>
        <Category></Category>
        <BistroBoss></BistroBoss>
        <Contact></Contact>
        <Recommends></Recommends>
        <PopularManue></PopularManue>
        <Featured></Featured>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
};

export default Home;
