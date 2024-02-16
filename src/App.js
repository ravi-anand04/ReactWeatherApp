import "./App.css";
import Forecast from "./Components/Forecast";
import Inputs from "./Components/Inputs";
import TemperatureAndDetails from "./Components/TemperatureAndDetails";
import TimeAndLocation from "./Components/TimeAndLocation";
import TopButtons from "./Components/TopButtons";

function App() {
  return (
    <div className="App">
      <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl shadow-gray-400">
        <TopButtons />
        <Inputs />
        <TimeAndLocation />
        <TemperatureAndDetails />
        <Forecast title="Hourly Forecast" />
        <Forecast title="Daily Forecast" />
      </div>
    </div>
  );
}

export default App;
