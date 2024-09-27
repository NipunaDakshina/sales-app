import React from "react";
import { TabButton } from "./TabButton";
import Img1 from "../assets/xmm-image2.png";
import Img2 from "../assets/xmm-image3.png";
import Img3 from "../assets/xmm-image4.png";
import { Card } from "./Card";

export const Feature = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row mt-20 mb-10 md:mx-10">
        <div className="md:w-1/4 p-4 flex flex-col">
          <div className="p-4">
            <TabButton>feature</TabButton>
          </div>

          <div className="text-4xl font-[popin]  text-gray-100 p-4">
            Features of X MARKET MAKER
          </div>
          <div className="text-xl font-[popins] text-justify text-gray-300 p-4">
            X Market Maker offers a comprehensive set of Features tailored for
            market participants. its core functionalities include real-time
            pricing, liquidity.
          </div>
        </div>

        <div className="md:w-3/4 border-l-orange-400 p-4 flex flex-col md:flex-row">

          <div className="md:w-1/3 m-2">
            <Card
              number="01"
              heading="Benifits for Holders"
              cardImage={Img1}
              description="We aim to increase the value of our currency
          to benefit our community. Market making will be key forcus. We aim to increase the value of our currency to benefit our community."
            ></Card>
          </div>
          <div className="md:w-1/3 m-2">
            <Card
              number="02"
              heading="Biggest Community"
              cardImage={Img2}
              description="We aim to increase the value of our currency
          to benefit our community. Market making will be key forcus. We aim to increase the value of our currency to benefit our community."
            ></Card>
          </div>
          <div className="md:w-1/3 m-2">
            <Card
              number="03"
              heading="Ecosystem-Redefined"
              cardImage={Img3}
              description="We aim to increase the value of our currency
          to benefit our community. Market making will be key forcus. We aim to increase the value of our currency to benefit our community."
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
};
