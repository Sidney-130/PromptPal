import React from "react";
import logo from "../assets/marketplacebg.webp";
import { checklistItems } from "./Constants";
import { CheckSquare } from "lucide-react";

const Marketplace = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center mt-6 tracking-wide ">
        Your
        <span className="bg-gradient-to-r from-purple-400 to-purple-700 text-transparent bg-clip-text">
          {" "}
          Marketplace
        </span>
      </h2>
      <div className="flex flex-wrap justify-center mt-10">
        <div className="p-2   w-full lg:w-1/2">
          <img src={logo} alt="logo" className="object-cover" />
        </div>
        <div className="pt-2 w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-12">
              <div className="text-green-400 mx-6 bg-neutral-900 h-10 w-10 p-2 justify-center item-center rounded-full ">
                <CheckSquare />
              </div>
              <div>
                <h5 className="mt-1 mb-2 text-xl">{item.title}</h5>
                <p className="text-md text-neutral-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
