const { Client } = require('pg');
const { createClient: createRedisClient } = require('redis');

const config = require('./index');

/**
 * POSTGRESQL SET UP
 */
const postgresClient = new Client({
  host: config.DB.HOST,
  port: config.DB.PORT,
  database: config.DB.DATABASE,
  user: config.DB.USERNAME,
  password: config.DB.PASSWORD
});
postgresClient.connect();

/**
 * REDIS SET UP
 */
const redisClient = createRedisClient({
  host: config.REDIS.HOST,
  port: config.REDIS.PORT,
});

module.exports = {
  postgresClient,
  redisClient,
};
