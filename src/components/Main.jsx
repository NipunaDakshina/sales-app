import React from "react";
import { Button } from "./Button";
import HeroImage from "../assets/xmm-hero.png";
import UserImg1 from "../assets/user1.jpg";
import UserImg2 from "../assets/user2.jpg";
import UserImg3 from "../assets/user3.jpg";
import { User } from "./User";

export const Main = () => {
  return (
    <>
      <div className="flex flex-col mx-10 mt-20 md:mx-10">
        <div className="text-gray-100  md:text-9xl w-full h-1/5 p-2 font-extrabold font-[helvetica] text-transparent bg-clip-text bg-gradient-to-r from-gray-100 via-blue-200 to-gray-200">
          Marketing Making With XMM.
        </div>
        <div className="flex flex-col w-full  pb-4 md:flex-row-reverse md:mx-10">
          <div className="md:w-1/2 order-1 md:order-2 flex flex-col items-start justify-center">
            <div className="font-semibold md:text-3xl text-justify text-gray-300 p-2">
              XMM empowers businessess to create dynamic content, target
              specific demographics, and optimize their digital presence
            </div>
            <div className="flex flex-col sm:flex-row md:flex-row p-2 space-y-2 md:space-y-0 md:space-x-4">
              <div className="flex justify-center items-center md:w-full">
                <Button>
                  Join <span className="hidden md:inline">Telegram</span>
                </Button>
              </div>

              <div className="flex  flex-row justify-center items-center overflow-hidden space-x-[-16px]">
                <User UserImage={UserImg1} />
                <User UserImage={UserImg2} />
                <User UserImage={UserImg3} />
              </div>
            </div>
            <div className="font-normal md:text-4xl text-gray-50 p-2">
              OUR HAPPY CUSTOMERS
            </div>
            <div className="font-light md:text-3xl text-gray-300 p-2">
              Our happy customers are at the heat of everything we do
            </div>
          </div>
          <div className="md:w-1/2 order-2 md:order-1 flex justify-center p-2 pt-0">
            <img
              src={HeroImage}
              alt="Hero Image"
              className="h-auto md:w-3/5 object-cover"
            />
          </div>
        </div>
      </div>
    </>
  );
};
