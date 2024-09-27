import React from "react";

export const Button = (props) => {
  return (
    <>
      <button className="bg-gradient-to-r from-custom-dark-gold to-custom-light-gold text-white font-[helvetica] py-2 px-6 md:w-40 md:ml-8 rounded-full shadow-lg hover:from-custom-light-gold hover:to-custom-dark-gold transition duration-400">
        {props.children}
      </button>
    </>
  );
};
