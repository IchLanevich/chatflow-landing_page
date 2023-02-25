import React from "react";
import FeaturesCard from "./atomic/FeaturesCard";
import {
  mark,
  message,
  mobile,
  plug,
  remote,
  bucket,
} from "../assets/index.js";

const Features = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
      <h2 className="text-[38px] font-bold leading-[54px] max-w-[742px] text-center">
        {featuresHeading.heading}
      </h2>
      <p className="max-w-[556px] text-base leading-[26px] text-[#0D082C99] text-center">
        {featuresHeading.subheading}
      </p>
      <div className="feautures-list grid grid-cols-1 md:grid-cols-3 gap-[30px] mt-[40px]">
        {featuresCard.map((feature) => {
          return <FeaturesCard feature={feature} key={feature.name} />;
        })}
      </div>
    </div>
  );
};

export default Features;

const featuresHeading = {
  heading: "Powerful Features to Enhance Your Live Chat Experience",
  subheading:
    "Our live chat product is packed with features to help you connect with your customers and provide them with the support they need.",
};

const featuresCard = [
  {
    icon: message,
    name: "real-time chat",
    title: "Real-time chat",
    description:
      "Our live chat feature allows users to communicate with website visitors in real-time through a chat window. This enables users to provide immediate support and assistance to their customers, improving their experience on the website.",
  },
  {
    icon: bucket,
    name: "customization options",
    title: "Cuztomization options",
    description:
      "Our live chat product offers a range of customization options to allow users to tailor the appearance of the chat window to match their website's branding. Users can choose from a variety of color schemes and chat bubble designs to create a cohesive look and feel.",
  },
  {
    icon: mark,
    name: "visitor tracking",
    title: "Visitor tracking",
    description:
      "Our live chat product includes visitor tracking capabilities, allowing users to see who is on their website and what pages they are viewing. This can help users understand the needs and interests of their visitors and provide more targeted support.",
  },
  {
    icon: remote,
    name: "automated chat responses",
    title: "Automated chat responses",
    description:
      "Our live chat product allows users to set up automated responses to common questions or queries. This can help users handle frequently asked questions more efficiently and free up time to focus on more complex or specific issues.",
  },
  {
    icon: mobile,
    name: "mobile app",
    title: "Mobile app",
    description:
      "Our live chat product includes a mobile app, allowing users to access and manage their live chat service on the go. This makes it easy for users to stay connected with their customers and provide support no matter where they are.",
  },
  {
    icon: plug,
    name: "integration with other tools",
    title: "Integration with other tools",
    description:
      "Our live chat product can be integrated with other tools that users may be using, such as a customer relationship management (CRM) system. This allows users to manage their customer interactions and data from a single platform.",
  },
];
