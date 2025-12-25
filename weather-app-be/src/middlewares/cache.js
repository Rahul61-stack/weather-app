import client from "../config/redisClient.js";

export const cache = async (req, res, next) => {
  let key = `${req.originalUrl}_${req.body.location}`;
  try {
    const cachedData = await client.get(key);
    if (cachedData) {
      console.log("Cache hit!");
      return res.json(JSON.parse(cachedData));
    }
    const originalJsonFunc = res.json.bind(res);
    res.json = (data) => {
      client.setEx(key, 3600, JSON.stringify(data));
      return originalJsonFunc(data);
    };
    next();
  } catch (err) {
    console.log(err);
  }
};
