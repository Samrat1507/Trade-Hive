import React from 'react';

const Feature = ({ title, desc, img, alignment }) => {
  return (
    <div className={`front-cards rounded-lg px-10 py-7 flex flex-col items-center justify-center md:gap-20 gap-5 ${alignment === 'left' ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
      <img src={img} alt="" className="w-64 h-64 rounded-lg drop-shadow-md" />
      <div className="flex flex-col gap-5">
        <h3 className="h3-header-text text-center md:text-start text-3xl font-semibold text-secondary max-w-md">{title}</h3>
        <p className="text-orange-50 text-md font-thin max-w-sm text-center md:text-start text-md">{desc}</p>
      </div>
    </div>
  );
};

export default Feature;