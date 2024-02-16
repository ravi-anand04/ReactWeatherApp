import React from "react";
import { GoSearch } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";

const Inputs = () => {
  return (
    <div className="flex justify-center my-6">
      <div className="flex w-3/4 items-center justify-center space-x-4">
        <input
          type="text"
          placeholder="Search for city..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <GoSearch
          className="text-white transition ease-in hover:scale-125"
          size={25}
        />
        <CiLocationOn
          className="text-white transition ease-in hover:scale-125"
          size={25}
        />
      </div>
      <div className="flex w-1/4 items-center justify-center">
        <button name="C" className="text-xl font-light text-white">
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button name="F" className="text-xl font-light text-white">
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
