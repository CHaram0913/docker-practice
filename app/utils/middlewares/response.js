const _ = require('lodash');

const responseFormatter = (req, res, next) => {
  res.success = (data = null, message = '') => {
    return res.json({ success: true, data, message });
  };

  res.fail = (data = null, message = '') => {
    // Excluding status code 400 ~ 500
    if (!_.inRange(res.statusCode, 400, 501))
      res.status(400);

    return res.json({ success: false, data, message });
  };

  next();
};

module.exports = {
  responseFormatter,
};
