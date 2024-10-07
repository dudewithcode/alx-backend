import redis from 'redis';
const redisClient = redis.createClient();


redisClient.on('ready', () => {
  console.log('Redis client connected to the server');
});

redisClient.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

redisClient.subscribe('holberton school channel');
redisClient.on('message', (channel, message) => {
  if (message === 'KILL_SERVER') {
    redisClient.unsubscribe('holberton school channel');
    redisClient.quit();
  }
  console.log(message);
});
