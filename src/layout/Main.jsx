import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer/Footer";
import Navbar from "../pages/shared/NavBar/Navbar";

const Main = () => {
  const location = useLocation();
  const onHeaderFooter =
    location.pathname.includes("login") || location.pathname.includes("signup");
  return (
    <div>
      <div>{onHeaderFooter ? null : <Navbar></Navbar>}</div>
      <div>
        <Outlet></Outlet>
      </div>
      <div>{onHeaderFooter ? null : <Footer></Footer>}</div>
    </div>
  );
};

export default Main;
