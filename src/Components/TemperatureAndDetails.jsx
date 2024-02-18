import React from "react";
import { FaTemperatureFull } from "react-icons/fa6";
import { FaWind } from "react-icons/fa6";
import { IoSunnyOutline } from "react-icons/io5";
import { TbSunset2 } from "react-icons/tb";
import { BsDropletHalf } from "react-icons/bs";
import { formatToLocalTime, iconUrlFromCode } from "../utils/weatherDetails";

const TemperatureAndDetails = ({
  weather: {
    details,
    icon,
    temp,
    temp_min,
    temp_max,
    sunrise,
    sunset,
    speed,
    feels_like,
    timezone,
    humidity,
  },
}) => {
  return (
    <div>
      <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
        <p>{details}</p>
      </div>
      <div className="flex items-center justify-between py-3 text-white">
        <img src={iconUrlFromCode(icon)} alt="" className="w-20" />
        <p className="text-5xl">{parseInt(temp)}°</p>
        <div className="flex flex-col items-start space-y-2">
          <div className="flex font-light text-sm items-center justify-center">
            <FaTemperatureFull size={18} className="mr-1" />
            Feels like:
            <span className="font-medium ml-1"> {parseInt(feels_like)}°</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <BsDropletHalf size={18} className="mr-1" />
            Humidity:
            <span className="font-medium ml-1">{humidity}%</span>
          </div>
          <div className="flex font-light text-sm items-center justify-center">
            <FaWind size={18} className="mr-1" />
            Wind:
            <span className="font-medium ml-1">{parseInt(speed)} km/h</span>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-2 text-white text-sm py-3">
        <IoSunnyOutline size={18} />
        <p className="font-light">
          Rise:{" "}
          <span className="font-medium ml-1">
            {formatToLocalTime(sunrise, timezone)}
          </span>
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
