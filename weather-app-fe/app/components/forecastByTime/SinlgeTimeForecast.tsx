import { WeatherHour } from "@/app/interfaces/WeatherInterface";
import { forwardRef, memo } from "react";

const SingleTimeForecast = forwardRef<HTMLDivElement, { hour: WeatherHour }>(
  ({ hour }, ref) => {
    return (
      <>
        <div
          ref={ref}
          className="flex-col text-white border-white border-2 p-3 rounded-2xl"
        >
          <div>
            <p>{hour.datetime.substring(0, hour.datetime.length - 3)}</p>
          </div>
          <div>
            <p>{hour.temp}</p>
          </div>
        </div>
      </>
    );
  }
);
SingleTimeForecast.displayName = "SingleTimeForecast";

export default memo(SingleTimeForecast);
