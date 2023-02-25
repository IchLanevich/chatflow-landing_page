import React from "react";

const CTA = ({ text }) => {
  return (
    <button className="bg-[#0D082C] text-white py-[15px] px-6 md:px-[35px] rounded-full">
      {text}
    </button>
  );
};

export default CTA;
