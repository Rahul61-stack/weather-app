import redis from "redis";

const redisHost = process.env.REDIS_HOST || "localhost";
const redisPort = parseInt(process.env.REDIS_PORT || "6379");

console.log(`Connecting to Redis at ${redisHost}:${redisPort}`); // Debug log

const client = redis.createClient({
  socket: {
    host: redisHost,
    port: redisPort,
    family: 4, // Force IPv4
  },
});

client.on("connect", () => {
  console.log("REDIS CONNECTED");
});

client.on("error", (err) => {
  console.error("Redis Client Error", err);
});

await client.connect();

export default client;
