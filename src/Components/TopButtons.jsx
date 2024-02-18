import React from "react";

const TopButtons = ({ setQuery }) => {
  const cities = [
    {
      id: 1,
      title: "Bengaluru",
    },
    {
      id: 2,
      title: "Dubai",
    },
    {
      id: 3,
      title: "Mumbai",
    },
    {
      id: 4,
      title: "Beijing",
    },
    {
      id: 5,
      title: "London",
    },
  ];

  return (
    <div className="flex items-center justify-around my-6">
      {cities.map((city) => (
        <button
          key={city.id}
          className="text-white text-lg font-medium hover:text-opacity-70 transition ease-in"
          onClick={() => setQuery({ q: city.title })}
        >
          {city.title}
        </button>
      ))}
    </div>
  );
};

export default TopButtons;
