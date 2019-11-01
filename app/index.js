const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const http = require('http');

const config = require('./configs');

/**
 * SERVER CONFIG
 */
const app = express();
const server = http.createServer(app);

/**
 * MIDDLEWARES
 */
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors({ origin: '*' }));

/**
 * ROOT ROUTE FOR CONNECTION TEST
 */
app.get('/', async (req, res, next) => {
  return res.json({ success: true });
});

/**
 * LISTEN
 */
server.listen(config.PORT, async () => {
  console.log(`Listening on port ${config.PORT}`);
});
