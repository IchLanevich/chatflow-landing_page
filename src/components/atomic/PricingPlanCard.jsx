import React from "react";
import { AiOutlineCheckCircle } from "react-icons/ai";

const PricingPlanCard = ({ plan }) => {
  return (
    <div className={`plan-card rounded-b-[10px]`}>
      <h4
        className={`w-full text-white px-[15px] py-[10px] rounded-t-[8px] text-center text-sm tracking-widest font-bold ${plan.plan}`}
      >
        {plan.plan}
      </h4>
      <div className="plan-info-wrapper p-[30px]">
        <div className="pt-[10px] pb-[20px] border-b-[1px] border-[#0000000D]">
          <p className="font-bold text-[32px] leading-[42px] text-center">
            {plan.price}
          </p>
        </div>
        <div className="plan-feature-list mt-[20px]">
          <ul className="flex flex-col gap-[15px]">
            {plan.features.map((feature) => {
              return (
                <li
                  key={feature}
                  className="text-base leading-[22px] text-[#0D082C99] flex items-center"
                >
                  <AiOutlineCheckCircle className="mr-[10px]" />
                  {feature}
                </li>
              );
            })}
          </ul>
        </div>
        <button
          className={`rounded-md p-[10px] ${plan.plan} text-white w-full mt-[20px] text-sm font-medium leading-[22px]`}
        >
          Choose
        </button>
      </div>
    </div>
  );
};

export default PricingPlanCard;
