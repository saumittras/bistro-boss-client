import React from "react";

const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div>
      <div className="card bg-base-100 rounded-none  shadow-xl">
        <figure className="">
          <img className=" " src={image} alt="Shoes" />
        </figure>
        <p className="bg-slate-900 absolute right-0 mr-4 mt-4 px-4 text-white">
          $ {price}
        </p>
        <div className="card-body flex-col justify-between items-center h-full">
          <h2 className="card-title text-center">{name}</h2>
          <p className="text-center">{recipe}</p>
          <div className="flex justify-center items-center ">
            <button className="btn uppercase text-yellow-600 btn-outline border-0 border-b-4 ">
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
