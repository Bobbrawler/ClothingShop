"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BasketServiceDinamic = void 0;
const constants_1 = require("../utils/constants");
class BasketServiceDinamic {
    constructor(basket, currency = constants_1.currencies.EURO) {
        this.totalAmount = 0;
        this.basket = basket;
        this.currency = currency;
        this.proxy = new Proxy(basket, {
            get: function (basket, prop, receiver) {
                if (prop === "items") {
                    console.log("Redact Basket");
                }
            }
        });
    }
}
exports.BasketServiceDinamic = BasketServiceDinamic;
