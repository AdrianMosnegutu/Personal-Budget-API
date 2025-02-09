const STATUS_CODE = require("../utils/status-codes.cjs");

function validateEnvelope(req, _res, next) {
    const { category, budget } = req.body;

    if (!category || !budget) {
        const err = new Error("Both a category and a budget must be provided!");
        err.status = STATUS_CODE.BAD_REQUEST;
        return next(err);
    }

    next();
}

function validatePartialEnvelope(req, _res, next) {
    const { category, budget } = req.body;

    if (!category && !budget) {
        const err = new Error(
            "Either a category or a budget must be provided!",
        );
        err.status = STATUS_CODE.BAD_REQUEST;
        return next(err);
    }

    next();
}

function validateTransferAmount(req, _res, next) {
    const fromId = req.envelope1.id;
    const { amount } = req.body;
    const transferAmount = Number(amount);

    if (Number.isNaN(transferAmount)) {
        const err = new Error("The transfer amount must be a number!");
        err.status = STATUS_CODE.BAD_REQUEST;
        return next(err);
    }

    if (amount > req.envelope1.budget) {
        const err = new Error(
            `Cannot transfer from envelope ${fromId} more money than the allocated budget!`,
        );
        err.status = STATUS_CODE.PRE_CONDITION_FAILED;
        return next(err);
    }

    next();
}

// eslint-disable-next-line no-unused-vars
function handleError(err, _req, res, _next) {
    const status = err.status || STATUS_CODE.SERVER_ERROR;
    res.status(status).send(err.message);
}

module.exports = {
    validateEnvelope,
    validatePartialEnvelope,
    validateTransferAmount,
    handleError,
};
