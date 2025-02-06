const express = require("express");
const {
    createEnvelope,
    getAllEnvelopes,
    getEnvelope,
    envelopeIdParam,
    updateEnvelope,
    deleteEnvelope,
} = require("../controllers/envelopesController.cjs");
const {
    validateEnvelope,
    validatePartialEnvelope,
} = require("../middleware/middleware.cjs");

const envelopesRoute = express.Router();

// Params
envelopesRoute.param("envelopeId", envelopeIdParam);

// GET
envelopesRoute.get("/", getAllEnvelopes);
envelopesRoute.get("/:envelopeId", getEnvelope);

// POST
envelopesRoute.post("/", validateEnvelope, createEnvelope);

// PATCH
envelopesRoute.patch("/:envelopeId", validatePartialEnvelope, updateEnvelope);

// DELETE
envelopesRoute.delete("/:envelopeId", deleteEnvelope);

module.exports = envelopesRoute;
