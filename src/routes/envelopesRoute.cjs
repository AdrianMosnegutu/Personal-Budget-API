const express = require("express");
const { createEnvelope } = require("../controllers/envelopesController.cjs");
const { validateEnvelope } = require("../middleware/middleware.cjs");

const envelopesRoute = express.Router();

// POST
envelopesRoute.post("/", validateEnvelope, createEnvelope);

module.exports = envelopesRoute;
