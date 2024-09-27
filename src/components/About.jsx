import React from "react";
import BuyImage from "../assets/xmm-img1.png";
import { TabButton } from "./TabButton";
import { Button } from "./Button";
import { CheckButton } from "./CheckButton";

export const About = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-20 md:mx-10">
        {/* Image Column */}
        <div className="md:w-1/2 flex items-center justify-center p-4">
        <div className="w-3/5 ">
          <img
            src={BuyImage}
            alt="Description"
            className="w-full h-full object-cover"
          />
          </div>
        </div>

        {/* Content Column */}
        <div className="md:w-1/2 p-4">
          <TabButton>about</TabButton>
          <p className="text-5xl text-gray-50 py-2">
            Best Ever Token Designed for Remarkable Success
          </p>
          <p className="text-xl font-light text-justify text-gray-300 py-4 ">
            The main adavantage of supporting $XMM is the project is focused on
            creating Volume and Market Making through. XMM empowers businesses
            to creative dynamic content target specific
          </p>
          <div className="flex flex-row my-4">
            <div><CheckButton item="Market"></CheckButton></div>
            <div><CheckButton item="Volume"></CheckButton></div>
            <div><CheckButton item="Trend"></CheckButton></div>
            <div><CheckButton item="Community"></CheckButton></div>
          
          </div>
          <div className="flex justify-center">
          <Button>Read Whitepaper</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
