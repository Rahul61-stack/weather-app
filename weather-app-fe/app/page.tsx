import WeatherSummary from "./components/WeatherSummary";

export default function Home() {
  return (
    <div className="flex-col gap-2">
      <div className="bg-slate-700 h-[30vh]">
        <WeatherSummary />
      </div>
    </div>
  );
}
