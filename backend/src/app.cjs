const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");

const { handleError } = require("./middleware/middleware.cjs");

const envelopesRoute = require("./routes/envelopesRoute.cjs");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/envelopes", envelopesRoute);

app.use(handleError);

module.exports = app;
