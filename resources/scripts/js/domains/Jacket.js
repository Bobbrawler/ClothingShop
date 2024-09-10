"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Jacket = void 0;
const Cloth_1 = require("./Cloth");
const constants_1 = require("../utils/constants");
const constants_2 = require("../utils/constants");
const constants_3 = require("../utils/constants");
const constants_4 = require("../utils/constants");
const constants_5 = require("../utils/constants");
const constants_6 = require("../utils/constants");
const constants_7 = require("../utils/constants");
class Jacket extends Cloth_1.Cloth {
    constructor(name = constants_7.allClothesNames.UNDEFINED, brand = constants_2.brands.UNDEFINED, size = constants_3.sizes.UNDEFINED, color = constants_4.colors.UNDEFINED, material = constants_5.materials.UNDEFINED, gender = constants_6.genders.UNDEFINED, embellishment = constants_1.embellishments.UNDEFINED) {
        super(name, brand, size, color, material, gender);
        this.embellishment = embellishment;
    }
    getEmbellishment() {
        return this.embellishment;
    }
    setEmbellishment(embellishment) {
        this.embellishment = embellishment;
    }
    getAllInfoString() {
        const baseInfo = super.getAllInfoString();
        return `${baseInfo}, Embellishment: ${this.embellishment}`;
    }
}
exports.Jacket = Jacket;
