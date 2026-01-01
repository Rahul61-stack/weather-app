import express from "express";
import cors from "cors";
import weatherRoutes from "./routes/weatherRoutes.js";
// import errorHandler from "./middlewares/errorHandler.js";

const app = express();

// Middlewares
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());

// // Routes
app.use("/weather", weatherRoutes);

// // Error handling
// app.use(errorHandler);

export default app;

/**
 * API CALL FLOW
 * app -> routes -> controllers -> services
 * RESPONSE REVERSE OF THIS
 * services -> controllers -> routes -> app
 *
 * config.js will contain all the keys, urls and ports(if required)
 * export from here and use everywhere
 *
 * utls are helper functions
 *
 * middlewares will be implemented where always in appjs (global middleware) route specific in routes
 */
