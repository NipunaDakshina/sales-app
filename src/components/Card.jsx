import React from "react";

export const Card = (props) => {
  return (
    <div className="bg-gray-800 flex flex-col rounded-lg shadow-lg p-6 transform hover:scale-105 transition duration-300">
      <div className="mb-4">
        <h3 className="text-2xl font-semibold text-white">{props.number}</h3>
      </div>
      <div className="mb-4">
        <h3 class="text-2xl font-semibold text-white">{props.heading}</h3>
      </div>
      <div className="mb-4">
       <img src={props.cardImage} alt="cardImage" className="h-3/4 object-cover" /> 
      </div>

      <div className="mb-4 text-white text-justify">{props.description}</div>
    </div>
  );
};
