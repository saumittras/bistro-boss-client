import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover/Cover";
import menucover from "../../assets/menu/banner3.jpg";
import useMenu from "../../hooks/useMenu";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import MenuCategory from "./MenuCategory/MenuCategory";
import dessertImg from "../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <Cover
        img={menucover}
        title="our menu"
        description={"WOULD YOU LIKE TO TRY A DISH?"}
      ></Cover>

      {/* Main Cover */}

      {/* Menu Category props item, title, img, description, button_title */}
      {/* For Cover props img, title, description */}
      <SectionTitle
        heading={"today's offer"}
        subHeading={"Dont't miss"}
      ></SectionTitle>
      {/* Offered menu items  */}
      <MenuCategory
        item={offered}
        button_title={"ORDER YOUR FAVORITE FOOD"}
      ></MenuCategory>
      {/* dessert menu items */}
      <MenuCategory
        item={dessert}
        title={"dessert"}
        img={dessertImg}
        button_title={"ORDER YOUR FAVORITE FOOD"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* pizza menu items */}
      <MenuCategory
        item={pizza}
        title={"pizza"}
        img={pizzaImg}
        button_title={"ORDER YOUR FAVORITE FOOD"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
      {/* SALAD menu items */}
      <MenuCategory
        item={salad}
        title={"salad"}
        img={saladImg}
        button_title={"ORDER YOUR FAVORITE FOOD"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>

      {/* SOUPS menu items */}
      <MenuCategory
        item={soup}
        title={"soup"}
        img={soupImg}
        button_title={"ORDER YOUR FAVORITE FOOD"}
        description={
          "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
        }
      ></MenuCategory>
    </div>
  );
};

export default Menu;
