require('dotenv').config();

const env = process.env.NODE_ENV || 'development';

const baseConfig = {

};

const config = {
  production: {
    PORT: process.env.API_SERVER_PORT_PRODUCTION,
    DB: {
      HOST: process.env.DB_HOST_PRODUCTION,
      PORT: process.env.DB_PORT_PRODUCTION,
      DATABASE: process.env.DB_DATABASE_PRODUCTION,
      USERNAME: process.env.DB_USERNAME_PRODUCTION,
      PASSWORD: process.env.DB_PASSWORD_PRODUCTION,
    },
    REDIS: {
      HOST: process.env.REDIS_HOST_PRODUCTION,
      PORT: process.env.REDIS_PORT_PRODUCTION,
    },
  },
  development: {
    PORT: process.env.API_SERVER_PORT_DEVELOPMENT,
    DB: {
      HOST: process.env.DB_HOST_DEVELOPMENT,
      PORT: process.env.DB_PORT_DEVELOPMENT,
      DATABASE: process.env.DB_DATABASE_DEVELOPMENT,
      USERNAME: process.env.DB_USERNAME_DEVELOPMENT,
      PASSWORD: process.env.DB_PASSWORD_DEVELOPMENT,
    },
    REDIS: {
      HOST: process.env.REDIS_HOST_DEVELOPMENT,
      PORT: process.env.REDIS_PORT_DEVELOPMENT,
    },
  },
  test: {
    PORT: process.env.API_SERVER_PORT_TEST,
    DB: {
      HOST: process.env.DB_HOST_TEST,
      PORT: process.env.DB_PORT_TEST,
      DATABASE: process.env.DB_DATABASE_TEST,
      USERNAME: process.env.DB_USERNAME_TEST,
      PASSWORD: process.env.DB_PASSWORD_TEST,
    },
  },
};

module.exports = {
  ...baseConfig,
  ...config[env],
};
