import React from "react";
import { pricingPlan, pricingHeading } from "../constans";
import PricingPlanCard from "./atomic/PricingPlanCard";

const Pricing = () => {
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-[#0D082C] text-[38px] leading-[54px] font-bold text-center mb-[10px]">
        {pricingHeading.heading}
      </h2>
      <p className="text-center text-[#0D082C99] text-base leading-[26px] max-w-[556px]">
        {pricingHeading.subheading}
      </p>
      <div className="pricing-plan-list grid content-center grid-cols-1 md:grid-cols-3 gap-[30px] mt-[40px]">
        {pricingPlan &&
          pricingPlan.map((plan) => {
            return <PricingPlanCard plan={plan} key={plan.plan} />;
          })}
      </div>
    </div>
  );
};

export default Pricing;
