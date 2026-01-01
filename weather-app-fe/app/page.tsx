import ForecastByTime from "./components/forecastByTime/ForecastByTime";
import WeatherSummary from "./components/WeatherSummary";

export default function Home() {
  return (
    <div className="flex-col py-4">
      <div className="bg-slate-700">
        <WeatherSummary />
      </div>
      <div className="p-2">
        <p className="text-white font-medium px-4 pb-2">
          Temperature every hour
        </p>
        <ForecastByTime />
      </div>
    </div>
  );
}
