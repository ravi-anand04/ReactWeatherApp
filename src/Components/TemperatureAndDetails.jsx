import React from "react";
import { FaTemperatureFull } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { TbSunset2 } from "react-icons/tb";
import { BsDropletHalf } from "react-icons/bs";

const TemperatureAndDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>Cloudy</p>
      </div>
      <div className="flex items-center justify-between py-3 text-white">
        <img
          src="https://openweathermap.org/img/wn/01d@2x.png"
          alt=""
          className="w-20"
        />
        <p className="text-5xl">34°</p>
        <div className="flex flex-col items-start space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureFull size={18} className="mr-1" />
            Feels like:
            <span className="font-medium ml-1"> 28°C</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BsDropletHalf size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1"> 28°C</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FaWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1"> 28°C</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 text-white text-sm py-3">
        <IoSunnyOutline size={18} />
        <p className="font-light">
          Rise: <span className="font-medium ml-1">06:45 AM</span>
        </p>
        <p className="font-light">|</p>
        <TbSunset2 size={18} />
        <p className="font-light">
          Set: <span className="font-medium ml-1">06:45 PM</span>
        </p>
        <p className="font-light">|</p>
        <IoSunnyOutline size={18} />
        <p className="font-light">
          High: <span className="font-medium ml-1">45°C</span>
        </p>
        <p className="font-light">|</p>
        <IoSunnyOutline size={18} />
        <p className="font-light">
          Low: <span className="font-medium ml-1">35°C</span>
        </p>
      </div>
    </div>
  );
};

export default TemperatureAndDetails;
