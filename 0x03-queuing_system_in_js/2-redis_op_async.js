import redis from 'redis';
const {promisify} = require('util');

const redisClient = redis.createClient();


redisClient.on('ready', () => {
  console.log('Redis client connected to the server');
});

redisClient.on('error', (err) => {
  console.log(`Redis client not connected to the server: ${err}`);
});

function setNewSchool(schoolName, value) {
  redisClient.set(schoolName, value, redis.print);
};

async function displaySchoolValue(schoolName) {
  const getAsync = promisify(redisClient.get).bind(redisClient);
  try {
    const value = await getAsync(schoolName);
    console.log(value);
  } catch (error) {
    console.log(error.toString());
  }
};

(async () => {
  await displaySchoolValue('Holberton');
  setNewSchool('HolbertonSanFrancisco', '100');
  await displaySchoolValue('HolbertonSanFrancisco');
})();
