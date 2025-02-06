class BudgetManager {
    #totalBudget = 0;
    #envelopes = [];

    getTotalBudget() {
        return this.#totalBudget;
    }

    getAllEnvelopes() {
        return this.#envelopes;
    }

    getEnvelope(id) {
        return this.#envelopes.find((envelope) => envelope.id === id);
    }

    addEnvelope(category, budget) {
        const newEnvelope = envelopeFactory(category, budget);
        this.#envelopes.push(newEnvelope);
        return newEnvelope;
    }
}

let envelopeId = 1;

function envelopeFactory(category, budget) {
    return {
        id: envelopeId++,
        category,
        budget,
    };
}

module.exports = BudgetManager;
