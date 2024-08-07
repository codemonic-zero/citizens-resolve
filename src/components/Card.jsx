import React from 'react';
import img from '../assets/images/water-drop.png';

const Card = ({ image, text, buttonText }) => {
  return (
    <div className="relative flex flex-col m-11 items-center justify-center rounded-full shadow-2xl p-3 w-48 h-48 bg-transparent overflow-hidden transition-transform transform hover:scale-105  bg-[#e0e1dd] ">
      <div
        className="absolute inset-0 bg-cover bg-no-repeat opacity-15 bg-[#e0e1dd]"
        style={{ backgroundImage: `url(${image})` }}
      />
      <div className="relative z-10 flex flex-col items-center justify-center">
        <p className="mb-2 mt-8 text-black text-xl font-bold">{text}</p>
        <button className="bg-[#e0e1dd]  text-blue-950 rounded-full px-2 py-1 bg-sky-900 text-white rounded hover:bg-sky-500 hover:text-black transition">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
