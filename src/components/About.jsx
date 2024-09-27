import React from "react";
import BuyImage from "../assets/xmm-img1.png";

export const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row">
        {/* Image Column */}
        <div className="md:w-1/2">
          <img
            src={BuyImage}
            alt="Description"
            className="w-full h-auto object-cover"
          />
        </div>

        {/* Content Column */}
        <div className="md:w-1/2 p-4">
          <h2 className="text-2xl font-bold mb-4">Title Here</h2>
          <p className="text-gray-700">
            This is some content that describes the image. You can add any
            relevant information here.
          </p>
        </div>
      </div>
    </div>
  );
};
