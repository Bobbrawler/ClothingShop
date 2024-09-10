"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Basket = void 0;
class Basket {
    constructor(items = []) {
        this.items = [];
        this.items = items; // Используем сеттер
    }
    getItems() {
        return this.items;
    }
    setItems(value) {
        this.items = value;
    }
    addItem(item) {
        this.items.push(item);
    }
    removeItem(item) {
        const index = this.items.indexOf(item);
        if (index > -1) {
            this.items.splice(index, 1);
            return;
        }
    }
    getAllInfo() {
        if (this.items.length === 0) {
            return "Корзина пуста.";
        }
        return this.items.map(item => item.getAllInfoString()).join("\n");
    }
}
exports.Basket = Basket;
