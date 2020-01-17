const express = require("express");
const bodyParser = require("body-parser");
const apirouter = require('./api/api.routes.js');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());

var router = express.Router();
// use express router
app.use('/api',router);
apirouter(app);
const port = process.env.PORT || "8000";
app.use(cors());





app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
  });
