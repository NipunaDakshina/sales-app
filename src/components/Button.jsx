import React from "react";

export const Button = (props) => {
  return (
    <>
      <button className="bg-gradient-to-r from-custom-dark-gold to-custom-light-gold text-white text-lg font-[helvetica] py-2 px-2 mx-4 w-3/4 md:w-50 rounded-full shadow-lg hover:from-custom-light-gold hover:to-custom-dark-gold transition duration-400">
        {props.children}
      </button>
    </>
  );
};
