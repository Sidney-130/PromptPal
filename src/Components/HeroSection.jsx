import React from "react";
import logo from "../assets/marketplacebg.webp";

const HeroSection = () => {
  return (
    <div className="flex flex-col items-center mt-6 lg:mt-10">
      <h1 className="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
        Unlock Creativity with Decentralized
        <span className="bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">
          {" "}
          AI Prompts
        </span>
      </h1>
      <p className=" mt-10 text-lg text-center text-neutral-400 max-w-4xl">
        Buy, sell and share unique AI prompts securely on our blockcahin-powered
        platform. Get access to free and ready to use prompts all for free and
        decentralized.
      </p>
      <div className="flex items-center justify-between my-10">
        <a
          href="#"
          className="bg-gradient-to-r from-purple-500 to-purple-800 py-3 px-2 rounded-md text-sm"
        >
          Start for free
        </a>
        <a href="#" className="text-sm py-3 px-3 mx-3 rounded-md border">
          Documentation
        </a>
      </div>
      <div className="flex mt-1 justify-center  w-1/2">
        <img
          src={logo}
          alt="logo1"
          className="rounded-lg h-50 w-1/2 border border-purple-700 shawdow-purple-400 mx-2 my-4 object-cover"
        />
        <img
          src={logo}
          alt="logo1"
          className="rounded-lg h-50 w-1/2 border border-purple-700 shawdow-purple-400 mx-2 my-4 object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
