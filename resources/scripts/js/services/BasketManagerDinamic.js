"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketManagerDinamic = void 0;
const constants_1 = require("../utils/constants");
const constants_2 = require("../utils/constants");
const productCheck = (cloth) => {
    for (let property in cloth) {
        if (cloth[property] === "Undefined") {
            return false;
        }
    }
    return true;
};
class BasketManagerDinamic {
    constructor(basket, currency = constants_1.currencies.EURO) {
        this.totalAmount = 0;
        this.updateTotalAmount = (cloth, type) => {
            if (type === "add") {
                this.totalAmount += constants_1.priceListInEuro[cloth.name] * constants_2.multipliersList[this.currency];
                return;
            }
            this.totalAmount -= constants_1.priceListInEuro[cloth.name] * constants_2.multipliersList[this.currency];
        };
        this.basket = basket;
        this.currency = currency;
    }
    addItem(cloth) {
        if (!productCheck(cloth)) {
            console.error("ERROR! The product does not meet the standards");
            return;
        }
        this.basket.items.push(cloth);
        this.updateTotalAmount(cloth, "add");
    }
    removeItem(clothName) {
        const clothesBasket = this.basket.items;
        const removeIndex = clothesBasket.findIndex(cloth => cloth.name === clothName);
        if (removeIndex === -1) {
            console.log("The selected item is not in the Basket");
            return;
        }
        this.updateTotalAmount(clothesBasket[removeIndex], "remove");
        clothesBasket.splice(removeIndex, 1);
    }
    getBasket() {
        return this.basket;
    }
    getTotalAmount() {
        return this.totalAmount;
    }
    getCurrency() {
        return this.currency;
    }
    setBasket(basket) {
        this.basket = basket;
    }
    setCurrency(currency) {
        this.currency = currency;
    }
    getAllInfoBasket() {
        if (this.basket.items.length === 0) {
            console.log("Basket is empty");
            return;
        }
        console.log(`Count clothes in Basket: ${this.basket.items.length}`);
        console.log(`Clothes in Basket:`);
        console.log(this.basket.items.map(cloth => cloth.getAllInfoString()).join("\n"));
        console.log(`Total amount of Basket: ${this.getTotalAmount()} ${this.currency}`);
    }
    clear() {
        this.basket.items = [];
        this.totalAmount = 0;
    }
}
exports.BasketManagerDinamic = BasketManagerDinamic;
