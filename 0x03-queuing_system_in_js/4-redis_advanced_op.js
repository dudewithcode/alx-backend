import redis from 'redis';
const redisClient = redis.createClient();


redisClient.on('ready', () => {
  console.log('Redis client connected to the server');
});

redisClient.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

redisClient.hset('HolbertonSchools', 'Portland', 50, redis.print);
redisClient.hset('HolbertonSchools', 'Seattle', 80, redis.print);
redisClient.hset('HolbertonSchools', 'New York', 20, redis.print);
redisClient.hset('HolbertonSchools', 'Bogota', 2, redis.print);
redisClient.hset('HolbertonSchools', 'Cali', 40, redis.print);
redisClient.hset('HolbertonSchools', 'Paris', 2, redis.print);
redisClient.hgetall('HolbertonSchools', (err, value) => {
  console.log(value)
});
