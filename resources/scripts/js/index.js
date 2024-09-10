"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Basket_1 = require("./domains/Basket");
const BasketManagerDinamic_1 = require("./services/BasketManagerDinamic");
const constants_1 = require("./utils/constants");
const basket = new Basket_1.Basket();
const basketManager = new BasketManagerDinamic_1.BasketManagerDinamic(basket, constants_1.currencies.EURO);
