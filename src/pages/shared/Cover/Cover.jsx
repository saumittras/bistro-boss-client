import React from "react";
import { Parallax } from "react-parallax";

const Cover = ({ img, title, description }) => {
  return (
    <div className="mb-10">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="The Menu Image"
        strength={-200}
      >
        <div className="hero w-full h-[600px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content w-9/12  bg-black bg-opacity-40 mx-auto text-neutral-content text-center">
            <div className="  py-24  text-white">
              <h3 className="mb-5 uppercase text-5xl w-full text-center font-bold">
                {title}
              </h3>
              {description && <p className="mb-5">{description}</p>}
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;
