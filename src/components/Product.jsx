import React from "react";
import CTA from "./atomic/CTA";
import ProductImage from "../assets/ProductImage.png";
import { productBenefit, productHeading } from "../constans";

const Product = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between">
      <div className="left-content max-w-[555px] w-full md:w-1/2">
        <h2 className="text-[#0D082C] text-[38px] leading-[54px] font-bold mb-[10px]">
          {productHeading.heading}
        </h2>
        <p className="text-[#0D082C99] leading-[26px]">
          {productHeading.subheading}
        </p>
        <div className="cta-wrapper my-10">
          <CTA text="Book a Demo" />
        </div>
        <div className="benefit-list flex flex-col md:flex-row gap-[30px]">
          {productBenefit.map((benefit) => {
            return (
              <div className="benefit" key={benefit.name}>
                <h5 className="font-semibold leading-[30px]">
                  {benefit.title}
                </h5>
                <p className="text-sm text-[#0D082C99] leading-[24px]">
                  {benefit.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
      <div className="right-content w-full md:w-1/2 flex justify-center items-center">
        <img src={ProductImage} alt="Product image" />
      </div>
    </div>
  );
};

export default Product;
