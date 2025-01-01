import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import recommendImg from "../../../assets/home/slide1.jpg";

const Recommends = () => {
  return (
    <section className="w-9/12 mx-auto my-24">
      <SectionTitle
        heading="Chef Recommends"
        subHeading={"Should Try"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8">
        <div className="card bg-base-100 rounded-none  shadow-xl">
          <figure className="w-full h-[300px]">
            <img
              className=" object-contain w-full"
              src={recommendImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Caeser Salad</h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
          </div>
          <div className="flex justify-center items-center py-6">
            <button className="btn uppercase text-yellow-600 btn-outline border-0 border-b-4 mt-4">
              Add to Cart
            </button>
          </div>
        </div>

        <div className="card bg-base-100 rounded-none  shadow-xl">
          <figure className="w-full h-[300px]">
            <img
              className=" object-contain w-full"
              src={recommendImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Caeser Salad</h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
          </div>
          <div className="flex justify-center items-center py-6">
            <button className="btn uppercase text-black btn-outline border-0 border-b-4 mt-4">
              add to cart
            </button>
          </div>
        </div>

        <div className="card bg-base-100 rounded-none  shadow-xl">
          <figure className="w-full h-[300px]">
            <img
              className=" object-contain w-full"
              src={recommendImg}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-center">Caeser Salad</h2>
            <p className="text-center">
              Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.
            </p>
          </div>
          <div className="flex justify-center items-center py-6">
            <button className="btn uppercase text-yellow-600 btn-outline border-0 border-b-4 mt-4">
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Recommends;
