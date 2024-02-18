import React, { useState } from "react";
import { GoSearch } from "react-icons/go";
import { CiLocationOn } from "react-icons/ci";
import { toast } from "react-toastify";

const Inputs = ({ setQuery, units, setUnits }) => {
  const [city, setCity] = useState("");

  const handleSearchClick = () => {
    if (city) {
      setQuery({ q: city });
    }
  };

  const handleLocationClick = () => {
    if (navigator.geolocation) {
      toast.info("Fetching current location.");
      navigator.geolocation.getCurrentPosition((position) => {
        toast.success("Location fetched!")
        let lat = position.coords.latitude;
        let lon = position.coords.longitude;
        setQuery({ lat, lon });
      });
    }
  };

  const handleUnit = (e) => {
    const selectedUnit = e.currentTarget.name;
    if (selectedUnit !== units) {
      setUnits(selectedUnit);
    }
  };

  return (
    <div className="flex justify-center my-6">
      <div className="flex w-3/4 items-center justify-center space-x-4">
        <input
          value={city}
          onChange={(e) => setCity(e.currentTarget.value)}
          type="text"
          placeholder="Search for city..."
          className="text-xl font-light p-2 w-full shadow-xl focus:outline-none capitalize placeholder:lowercase"
        />
        <GoSearch
          className="text-white transition ease-in hover:scale-125"
          size={25}
          onClick={handleSearchClick}
        />
        <CiLocationOn
          className="text-white transition ease-in hover:scale-125"
          size={25}
          onClick={handleLocationClick}
        />
      </div>
      <div className="flex w-1/4 items-center justify-center">
        <button
          name="metric"
          className="text-xl font-light text-white hover:scale-125 transition ease-out"
          onClick={handleUnit}
        >
          °C
        </button>
        <p className="text-xl text-white mx-1">|</p>
        <button
          name="imperial"
          className="text-xl font-light text-white hover:scale-125 transition ease-out"
          onClick={handleUnit}
        >
          °F
        </button>
      </div>
    </div>
  );
};

export default Inputs;
