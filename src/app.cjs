const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

module.exports = app;
