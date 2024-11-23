
import React from 'react';

const Projectcard = (props) => {
  return (
    <div className="relative flex flex-col items-center justify-between bg-white border-2 border-lightText md:border-none md:w-2/5 p-5 cursor-pointer rounded-lg hover:scale-105 transition-all">
      {/* Animated Border Effect */}
      <div className="absolute inset-0 rounded-lg border-2 border-transparent animate-rainbow"></div>

      {/* Content Section */}
      <div className="relative z-10">
        <h3 className="font-semibold text-lg text-center my-5">{props.title}</h3>
        <p className="text-lightText">
         {props.content}
        </p>
      </div>

      

      {/* View Project Button */}
      <div className="relative z-10 flex justify-center">
        <a
          href={props.link}
          target="_blank"
          rel="noopener noreferrer"
className=' bg-white py-2 px-5 rounded-full mt-4 outline hover:shadow-[0_3px_10px_rgb(0,0,0,0.2)] hover:bg-brightGreen hover:text-white transition-all'        >
          View Project
        </a>
      </div>
    </div>
  );
};

export default Projectcard;
