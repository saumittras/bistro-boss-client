import React from "react";

const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="md:w-4/12 mx-auto my-8">
      <p className="text-yellow-500 text-center mb-2">--- {subHeading} ---</p>
      <h3 className="uppercase text-3xl border-y-4 py-4 text-center">
        {heading}
      </h3>
    </div>
  );
};

export default SectionTitle;
