"use client";

import useWeatherData from "@/app/store/zustand";
import SinlgeTimeForecast from "./SinlgeTimeForecast";
import { Skeleton } from "@/components/ui/skeleton";
import { memo, useEffect, useMemo, useRef } from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const ForecastByTime = () => {
  const { weatherData } = useWeatherData();

  const hourRef = useRef<{ [hour: string]: HTMLDivElement }>({});

  const forecast = useMemo(() => {
    if (weatherData) {
      return weatherData.days[0].hours;
    } else return null;
  }, [weatherData]);
  useEffect(() => {
    if (forecast && hourRef.current) {
      const currentHour = new Date().getHours();
      console.log(currentHour, hourRef.current);
      const currentHourElement = hourRef.current[currentHour];
      if (currentHourElement) {
        currentHourElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "center",
        });
      }
    }
  }, [forecast]);

  if (!forecast) {
    return (
      <div className="flex justify-center">
        <Skeleton className="h-[2vh] w-[90%]" />;
      </div>
    );
  }

  return (
    <ScrollArea className="rounded-md border whitespace-nowrap p-1">
      <div className="flex w-max space-x-4 p-4">
        {forecast.map((hour, i) => {
          return (
            <div
              key={`${hour.datetime}${i}`}
              className="overflow-hidden rounded-md"
            >
              <SinlgeTimeForecast
                ref={(el) => {
                  if (el) {
                    hourRef.current[hour.datetime.substring(0, 2)] = el;
                  }
                }}
                hour={hour}
              />
            </div>
          );
        })}
        <ScrollBar orientation="horizontal" />
      </div>
    </ScrollArea>
  );
};

export default memo(ForecastByTime);
