import React from "react";
import { footerHeading, footerLinks } from "../constans";
import CTA from "./atomic/CTA";

const Footer = () => {
  return (
    <>
      <div className="footer-description flex flex-col md:flex-row my-[50px]">
        <div className="headline flex flex-col">
          <h2 className="text-[#0D082C] text-[24px] leading-8 md:leading-[54px] font-bold mb-[10px] md:mb-0">
            {footerHeading.heading}
          </h2>
          <p className="text-[#0D082C99] text-base leading-[26px] max-w-[742px]">
            {footerHeading.subheading}
          </p>
        </div>
        <div className="cta mr-auto mt-4 md:ml-auto">
          <CTA text="Sign Up Now" />
        </div>
      </div>
      <div className="footer-links flex flex-wrap md:gap-[30px] my-[50px] justify-between">
        {footerLinks.map((link) => {
          return (
            <div
              className="links__wrapper md:w-[264.5px] mb-8 md:mb-0"
              key={link.name}
            >
              <h4 className="font-bold leading-[18px] text-[14px] tracking-widest text-[#0D082C99] mb-[20px]">
                {link.title}
              </h4>
              <ul className="flex flex-col gap-2">
                {link.links.map((link) => {
                  return (
                    <li key={link}>
                      <a href="#" className="text-base leading-[28px]">
                        {link}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Footer;
