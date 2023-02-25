import React from "react";
import rightImage from "../assets/ChatRightImg.png";
import playIcon from "../assets/PlayIcon.png";
import CTA from "./atomic/CTA";
import { heroLeftContent } from "../constans";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:mt-[70px]">
      <div className="left-content w-full md:w-1/2">
        <h1 className="text-[38px] md:text-[56px] max-w-[653px] text-white text-left md:text-left leading-[54px] md:leading-[70px] font-semibold mb-[10px]">
          {heroLeftContent.heading}
        </h1>
        <p className="text-lg max-w-[552px] text-[#FFFFFF99] leading-8 mb-[30px] text-left md:text-left">
          {heroLeftContent.subheading}
        </p>
        <div className="cta-wrapper flex justify-center md:justify-start gap-[15px]">
          <CTA text="Get Started" />
          <button className="bg-[#FFFFFF0D] py-[15px] px-6 md:px-[35px] rounded-full text-white flex gap-2">
            <span>
              <img src={playIcon} alt="Play icon" />
            </span>
            See in Action
          </button>
        </div>
      </div>
      <div className="right-content w-full md:w-1/2 flex justify-center mt-8 md:mt-0">
        <img src={rightImage} alt="right image" className="select-none" />
      </div>
    </div>
  );
};

export default Hero;
