const BudgetManager = require("../services/BudgetManager.cjs");
const manager = new BudgetManager();

function createEnvelope(req, res) {
    const { category, budget } = req.body;
    const newEnelope = manager.addEnvelope(category, budget);
    res.status(201).send(newEnelope);
}

module.exports = { createEnvelope };
