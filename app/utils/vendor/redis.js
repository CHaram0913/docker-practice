const { redisClient } = require('../../configs/database');

module.exports.set = (key, object, expiry = null) => {
  return new Promise((resolve, reject) => {
    redisClient.set(key, JSON.stringify(object), (err, response) => {
      if (expiry)
        redisClient.expire(key, expiry);

      if (err)
        reject(err);
      else
        resolve(response);
    });
  });
};

module.exports.get = key => {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, response) => {
      if (err)
        reject(err);
      else
        resolve(JSON.parse(response));
    });
  });
};
