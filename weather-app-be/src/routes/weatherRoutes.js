import express from "express";
import * as weatherController from "../controllers/weatherController.js";

const router = express.Router();

router.use("/", weatherController.getWeather);

export default router;
