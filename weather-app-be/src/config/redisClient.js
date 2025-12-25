import redis from "redis";

const client = redis.createClient({
  host: "localhost",
  port: 6379,
});

client.on("connect", () => {
  console.log("REDIS CONNECTED");
});

client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

client.connect();

export default client;
