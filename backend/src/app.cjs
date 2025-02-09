require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");

const { handleError } = require("./middleware/middleware.cjs");

const envelopesRoute = require("./routes/envelopesRoute.cjs");

const app = express();

app.use(bodyParser.json());
app.use(morgan("dev"));
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "DELETE", "PATCH"],
  }),
);

app.use("/envelopes", envelopesRoute);

app.use(handleError);

module.exports = app;
