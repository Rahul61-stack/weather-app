"use client";

const WeatherSummary = () => {
  return (
    <>
      <div className="h-full w-full flex justify-center items-center text-center">
        <div className="flex-col">
          <p className="text-3xl">Location</p>
          <p className="text-8xl">24</p>
          <p className="text-2xl">Conditions</p>
          <p className="text-xl">H:28 L:19</p>
        </div>
      </div>
    </>
  );
};

export default WeatherSummary;
