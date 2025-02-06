const BudgetManager = require("../services/BudgetManager.cjs");
const manager = new BudgetManager();

function envelopeIdParam(req, _res, next, id) {
    const envelopeId = Number(id);

    if (Number.isNaN(envelopeId)) {
        const err = new Error("Envelope ID must be an integer!");
        err.status = 400;
        return next(err);
    }

    const envelope = manager.getEnvelope(envelopeId);

    if (!envelope) {
        const err = new Error(`Envelope with id ${envelopeId} does not exist!`);
        err.status = 404;
        return next(err);
    }

    req.envelope = envelope;
    next();
}

function getAllEnvelopes(_req, res) {
    res.send(manager.getAllEnvelopes());
}

function getEnvelope(req, res) {
    res.send(req.envelope);
}

function createEnvelope(req, res) {
    const { category, budget } = req.body;
    const newEnelope = manager.addEnvelope(category, budget);
    res.status(201).send(newEnelope);
}

function updateEnvelope(req, res) {
    const envelopeId = req.envelope.id;
    const envelopeData = req.body;

    const updatedEnvelope = manager.updateEnvelope(envelopeId, envelopeData);
    res.send(updatedEnvelope);
}

module.exports = {
    envelopeIdParam,
    getAllEnvelopes,
    createEnvelope,
    getEnvelope,
    updateEnvelope,
};
