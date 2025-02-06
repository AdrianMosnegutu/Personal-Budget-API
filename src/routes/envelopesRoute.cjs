const express = require("express");
const {
    createEnvelope,
    getAllEnvelopes,
    getEnvelope,
    envelopeIdParam,
} = require("../controllers/envelopesController.cjs");
const { validateEnvelope } = require("../middleware/middleware.cjs");

const envelopesRoute = express.Router();

// Params
envelopesRoute.param("envelopeId", envelopeIdParam);

// GET
envelopesRoute.get("/", getAllEnvelopes);
envelopesRoute.get("/:envelopeId", getEnvelope);

// POST
envelopesRoute.post("/", validateEnvelope, createEnvelope);

module.exports = envelopesRoute;
