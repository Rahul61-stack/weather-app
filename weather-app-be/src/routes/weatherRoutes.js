import express from "express";
import * as weatherController from "../controllers/weatherController.js";
import { cache } from "../middlewares/cache.js";

const router = express.Router();

router.use("/", cache, weatherController.getWeather);

export default router;
