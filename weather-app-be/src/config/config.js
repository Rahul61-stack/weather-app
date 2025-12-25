export default {
  port: process.env.PORT || 5000,
  weatherApiKey: process.env.WEATHER_API_KEY,
  weatherApiUrl:
    process.env.WEATHER_API_URL || "https://api.openweathermap.org/data/2.5",
  nodeEnv: process.env.NODE_ENV || "development",
};
