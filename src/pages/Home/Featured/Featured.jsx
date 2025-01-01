import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <div className="featured-item bg-fixed text-white  pt-8 my-20">
      <SectionTitle
        heading="Featured Item"
        subHeading="Check it Out"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-40 pb-20 pt-12 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-8">
          <p>Aug 20, 2025 </p>
          <p className="uppercase">Where can i get some?</p>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Doloremque, incidunt velit minima fugiat similique facilis ab earum
            tempore adipisci eaque optio quo, fugit culpa eveniet ipsum sit
            minus delectus aspernatur sint! Quod ex necessitatibus, ad tempora
            qui animi omnis consequatur explicabo beatae at, culpa, eius eveniet
            ipsam doloremque vitae facere?
          </p>
          <button className="btn text-black btn-outline border-0 border-b-4 mt-4">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Featured;
