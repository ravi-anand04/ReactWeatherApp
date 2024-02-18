import { useEffect, useState } from "react";
import "./App.css";
import Forecast from "./Components/Forecast";
import Inputs from "./Components/Inputs";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
import TimeAndLocation from "./Components/TimeAndLocation";
import TopButtons from "./Components/TopButtons";
import getFormattedWeatherData from "./utils/weatherDetails";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

function App() {
  const [query, setQuery] = useState({ q: "bangalore" });
  const [units, setUnits] = useState("metric");
  const [weather, setWeather] = useState(null);

  useEffect(() => {
    const fetchWeather = async () => {
      const message = query.q ? query.q : "current location.";
      toast.info("Fetching weather for " + message);
      await getFormattedWeatherData({ ...query, units }).then((data) => {
        toast.success(`Retrieved data for ${data.name} ${data.country}`);
        setWeather(data);
      });
    };
    fetchWeather();
  }, [query, units]);

  const setDynamicBg = () => {
    if (!weather) {
      return "from-cyan-700 to-blue-700";
    }

    const tempCheck = units === "metric" ? 20 : 60;

    if (weather.temp <= tempCheck) {
      return "from-cyan-700 to-blue-700";
    }

    return "from-yellow-700 to-orange-700";
  };

  return (
    <div
      className={`mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br h-fit shadow-xl shadow-gray-400 ${setDynamicBg()}`}
    >
      <TopButtons setQuery={setQuery} />
      <Inputs setQuery={setQuery} units={units} setUnits={setUnits} />

      {weather && (
        <div>
          <TimeAndLocation weather={weather} />
          <TemperatureAndDetails weather={weather} />
          <Forecast title="Hourly Forecast" items={weather.hourly} />
          <Forecast title="Daily Forecast" items={weather.daily} />
        </div>
      )}
      <ToastContainer autoClose={3000} theme="colored" newestOnTop={true} />
    </div>
  );
}

export default App;
