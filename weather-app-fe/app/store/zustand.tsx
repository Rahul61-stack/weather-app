import { create } from "zustand";
import { WeatherApiResponse } from "../interfaces/WeatherInterface";

type State = {
  weatherData: WeatherApiResponse | null;
  favorites: string[];
  selectedTempUnit: "KELVIN" | "CELSIUS" | "FAHRENHEIT";
};
type Action = {
  updateFavorites: (favorites: string[]) => void;
  updateWeatherData: (weatherData: WeatherApiResponse) => void;
  updateSelectedTempUnit: (unit: "KELVIN" | "CELSIUS" | "FAHRENHEIT") => void;
};

const useWeatherData = create<State & Action>((set) => ({
  weatherData: null,
  favorites: [],
  selectedTempUnit: "FAHRENHEIT",
  updateFavorites: (favorites) => set({ favorites }),
  updateWeatherData: (weatherData) => set({ weatherData }),
  updateSelectedTempUnit: (unit) => set({ selectedTempUnit: unit }),
}));

export default useWeatherData;
