const { Router } = require('express');

const router = Router();

router.get('/', (req, res, next) => {
  return res.success(null, 'Service is up and running!');
});

/**
 * router.route
 */

router.use((req, res, next) => {
  return res.status(404).fail(null, 'Resource is not available. Please check the endpoint again.');
});

router.use((err, req, res, next) => {
  // TODO: Add server error log
  return res.status(500).fail(null, `Unknown Server Error: ${err.message}`);
});

module.exports = router;
