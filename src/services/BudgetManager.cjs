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

    updateEnvelope(id, envelopeData) {
        const index = this.#envelopes.findIndex(
            (envelope) => envelope.id === id,
        );
        Object.assign(this.#envelopes[index], envelopeData);
        return this.#envelopes[index];
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
