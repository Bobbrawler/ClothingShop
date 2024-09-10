"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Basket_1 = require("./domains/Basket");
const Pant_1 = require("./domains/Pant");
const BasketManagerDinamic_1 = require("./services/BasketManagerDinamic");
const constants_1 = require("./utils/constants");
const constants_2 = require("./utils/constants");
const constants_3 = require("./utils/constants");
const constants_4 = require("./utils/constants");
const constants_5 = require("./utils/constants");
const constants_6 = require("./utils/constants");
const constants_7 = require("./utils/constants");
const constants_8 = require("./utils/constants");
const constants_9 = require("./utils/constants");
const Hoodie_1 = require("./domains/Hoodie");
const Tshirt_1 = require("./domains/Tshirt");
const constants_10 = require("./utils/constants");
const constants_11 = require("./utils/constants");
const constants_12 = require("./utils/constants");
const constants_13 = require("./utils/constants");
const basket = new Basket_1.Basket();
const basketManager = new BasketManagerDinamic_1.BasketManagerDinamic(basket, constants_1.currencies.EURO);


