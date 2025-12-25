import * as weatherService from "../services/weatherServices.js";

export const getWeather = async (req, res, next) => {
  try {
    const { location, dateFrom, dateTo } = req.body;
    const resp = await weatherService.getCurrentWeather(
      location,
      dateFrom,
      dateTo
    );
    //THIS IS WHAT WILL BE RETURNED
    res.json(resp);
  } catch (err) {
    next(err);
  }
};
