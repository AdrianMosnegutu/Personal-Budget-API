function validateEnvelope(req, _res, next) {
    const { category, budget } = req.body;

    if (!category || !budget) {
        const err = new Error("Both a category and a budget must be provided!");
        err.status = 400;
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
        err.status = 400;
        return next(err);
    }

    next();
}

// eslint-disable-next-line no-unused-vars
function handleError(err, _req, res, _next) {
    const status = err.status || 500;
    res.status(status).send(err.message);
}

module.exports = { validateEnvelope, validatePartialEnvelope, handleError };
