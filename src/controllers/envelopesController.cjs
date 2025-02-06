const BudgetManager = require("../services/BudgetManager.cjs");
const STATUS_CODE = require("../utils/status-codes.cjs");
const manager = new BudgetManager();

function envelopeIdParam(req, _res, next, id) {
    const envelopeId = Number(id);

    if (Number.isNaN(envelopeId)) {
        const err = new Error("Envelope ID must be an integer!");
        err.status = STATUS_CODE.BAD_REQUEST;
        return next(err);
    }

    const envelope = manager.getEnvelope(envelopeId);

    if (!envelope) {
        const err = new Error(`Envelope with id ${envelopeId} does not exist!`);
        err.status = STATUS_CODE.NOT_FOUND;
        return next(err);
    }

    if (!req.envelope1) {
        req.envelope1 = envelope;
    } else {
        req.envelope2 = envelope;
    }

    next();
}

function getAllEnvelopes(_req, res) {
    res.send(manager.getAllEnvelopes());
}

function getEnvelope(req, res) {
    res.send(req.envelope1);
}

function createEnvelope(req, res) {
    const { category, budget } = req.body;
    const newEnelope = manager.addEnvelope(category, budget);
    res.status(STATUS_CODE.CREATED).send(newEnelope);
}

function transferBudget(req, res) {
    const fromId = req.envelope1.id;
    const toId = req.envelope2.id;

    const { amount } = req.body;
    const transferAmount = Number(amount);

    const updatedEnvelope = manager.transferBudget(
        fromId,
        toId,
        transferAmount,
    );
    res.send(updatedEnvelope);
}

function updateEnvelope(req, res) {
    const envelopeId = req.envelope1.id;
    const envelopeData = req.body;

    const updatedEnvelope = manager.updateEnvelope(envelopeId, envelopeData);
    res.send(updatedEnvelope);
}

function deleteEnvelope(req, res) {
    const envelopeId = req.envelope1.id;
    manager.deleteEnvelope(envelopeId);
    res.status(STATUS_CODE.NO_CONTENT).send();
}

module.exports = {
    envelopeIdParam,
    getAllEnvelopes,
    createEnvelope,
    getEnvelope,
    transferBudget,
    updateEnvelope,
    deleteEnvelope,
};
