import React from "react";

const MenuItem = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="flex flex-row space-x-2">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="w-[100px]"
        src={image}
        alt=""
      />
      <div>
        <div className="flex justify-between">
          <h3 className="uppercase">{name} ------------------</h3>
          <p className="text-yellow-500">$ {price}</p>
        </div>
        <p>{recipe}</p>
      </div>
    </div>
  );
};

export default MenuItem;
