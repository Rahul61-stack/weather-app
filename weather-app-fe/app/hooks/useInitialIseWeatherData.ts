import { useCallback, useEffect } from "react";
import useWeatherData from "../store/zustand";
import { toast } from "sonner";
import { getWeatherData } from "../services/weather.service";

const useInitialiseWeatherData = () => {
  const { updateWeatherData } = useWeatherData();

  const initialiseData = useCallback(() => {
    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${
      currentDate.getMonth() + 1
    }-${currentDate.getDate()}`;
    toast.promise(
      getWeatherData("Kharghar", {
        range: {
          from: formattedDate,
          to: formattedDate,
        },
      })
        .then((data) => {
          if (data) {
            updateWeatherData(data);
          }
        })
        .catch(() => {
          toast.error("Failed to fetch weather data, please try again later");
        }),
      {
        loading: "Fetching latest weather data........",
        success: "Data fetched successfully",
        error: "Failed to fetch weather data, please try again",
      }
    );
  }, [updateWeatherData]);

  useEffect(() => {
    initialiseData();
  }, [initialiseData]);
};

export default useInitialiseWeatherData;
