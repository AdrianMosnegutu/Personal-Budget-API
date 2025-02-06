const express = require("express");
const {
    createEnvelope,
    getAllEnvelopes,
} = require("../controllers/envelopesController.cjs");
const { validateEnvelope } = require("../middleware/middleware.cjs");

const envelopesRoute = express.Router();

// GET
envelopesRoute.get("/", getAllEnvelopes);

// POST
envelopesRoute.post("/", validateEnvelope, createEnvelope);

module.exports = envelopesRoute;
