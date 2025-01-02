import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/NavBar/Navbar";

const Main = () => {
  const location = useLocation();
  return (
    <div>
      <div>{location.pathname === "/login" ? null : <Navbar></Navbar>}</div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>{location.pathname === "/login" ? null : <Footer></Footer>}</div>
    </div>
  );
};

export default Main;
