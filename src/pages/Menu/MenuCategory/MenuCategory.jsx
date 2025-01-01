import React from "react";
import MenuItem from "../../shared/MenuItem/MenuItem";
import Cover from "../../shared/Cover/Cover";
import { Link } from "react-router-dom";

const MenuCategory = ({ item, title, img, description, button_title }) => {
  return (
    <div className="w-12/12 mx-auto my-24">
      {title && (
        <Cover img={img} title={title} description={description}></Cover>
      )}

      <div className="grid w-9/12 mx-auto md:grid-cols-2 my-12 gap-10">
        {item.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>

      {button_title && (
        <div className="flex w-full justify-center">
          <Link to={`/order/${title}`}>
            <button className="btn btn-outline border-0 border-b-4 mt-4">
              {button_title}
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MenuCategory;
