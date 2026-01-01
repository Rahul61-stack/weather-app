import * as weatherService from "../services/weatherServices.js";

export const getWeather = async (req, res, next) => {
  try {
    console.log(req.body, "REHUL");
    const { location, range } = req.body;
    const resp = await weatherService.getCurrentWeather(
      location,
      range ? range.from : undefined,
      range ? range.to : undefined
    );
    res.json(resp);
  } catch (err) {
    next(err);
  }
};
