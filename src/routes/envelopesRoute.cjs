const express = require("express");
const {
    createEnvelope,
    getAllEnvelopes,
    getEnvelope,
    envelopeIdParam,
    updateEnvelope,
    deleteEnvelope,
    transferBudget,
} = require("../controllers/envelopesController.cjs");
const {
    validateEnvelope,
    validatePartialEnvelope,
    validateTransferAmount,
} = require("../middleware/middleware.cjs");

const envelopesRoute = express.Router();

// Params
envelopesRoute.param("envelopeId", envelopeIdParam);
envelopesRoute.param("from", envelopeIdParam);
envelopesRoute.param("to", envelopeIdParam);

// GET
envelopesRoute.get("/", getAllEnvelopes);
envelopesRoute.get("/:envelopeId", getEnvelope);

// POST
envelopesRoute.post("/", validateEnvelope, createEnvelope);
envelopesRoute.post(
    "/transfer/:from/:to",
    validateTransferAmount,
    transferBudget,
);

// PATCH
envelopesRoute.patch("/:envelopeId", validatePartialEnvelope, updateEnvelope);

// DELETE
envelopesRoute.delete("/:envelopeId", deleteEnvelope);

module.exports = envelopesRoute;
