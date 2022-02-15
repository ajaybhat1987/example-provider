const Product = require('./product');

class ProductRepository {

    constructor() {
        this.products = new Map([
            ["09", new Product("09", "CREDIT_CARD", "Gem Visa", "v1", 10, 1.0)],
            ["10", new Product("10", "CREDIT_CARD", "28 Degrees", "v1", 20, 2.0)],
            ["11", new Product("11", "PERSONAL_LOAN", "MyFlexiPay", "v2", 30, 2.5)],
        ]);
    }

    async fetchAll() {
        return [...this.products.values()]
    }

    async getById(id) {
        return this.products.get(id);
    }
}

module.exports = ProductRepository;
