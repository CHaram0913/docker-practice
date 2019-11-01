const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const http = require('http');

const config = require('./configs');
const router = require('./routes');
const { responseFormatter } = require('./utils/middlewares');

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
app.use(responseFormatter);

/**
 * ROUTERS
 */
app.use(router);

/**
 * LISTEN
 */
server.listen(config.PORT, async () => {
  console.log(`Listening on port ${config.PORT}`);
});
