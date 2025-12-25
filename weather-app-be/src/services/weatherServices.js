import axios from "axios";
import config from "../config/config.js";
export const getCurrentWeather = async (location, dateFrom, dateTo) => {
  try {
    const urlDateFrom = dateFrom ? `/${dateFrom}` : "";
    const urlDateTo = dateTo ? `/${dateTo}` : "";
    const response = await axios.get(
      `${config.weatherApiUrl}/${location}${urlDateFrom}${urlDateTo}?key=${config.weatherApiKey}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
