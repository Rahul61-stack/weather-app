"use client";

import useWeatherData from "../store/zustand";
import useInitialiseWeatherData from "../hooks/useInitialIseWeatherData";

const WeatherSummary = () => {
  const { weatherData } = useWeatherData();

  useInitialiseWeatherData();

  if (!weatherData) {
    return;
  }
  return (
    <>
      <div className="h-full w-full flex justify-center items-center text-center text-white">
        <div className="flex-col">
          <p className="text-3xl">{weatherData.address}</p>
          <p className="text-8xl">{weatherData.days[0].temp}</p>
          <p className="text-2xl">Conditions</p>
          <p className="text-xl">{`H:${weatherData.days[0].tempmax} L:${weatherData.days[0].tempmin}`}</p>
        </div>
      </div>
    </>
  );
};

export default WeatherSummary;
