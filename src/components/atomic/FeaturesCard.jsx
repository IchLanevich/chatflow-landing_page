import React from "react";

const FeaturesCard = ({ feature }) => {
  return (
    <div>
      <div className="w-[50px] h-[50px] rounded-md bg-[#4635F3] flex justify-center items-center">
        <img src={feature.icon} alt={feature.name} />
      </div>
      <h4 className="text-[#0D082C] text-xl leading-[25px] font-bold my-[15px]">
        {feature.title}
      </h4>
      <p className="text-[#0D082C99] leading-[26px]">{feature.description}</p>
    </div>
  );
};

export default FeaturesCard;
