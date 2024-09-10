"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hoodie = void 0;
const Cloth_1 = require("./Cloth");
const constants_1 = require("../utils/constants");
const constants_2 = require("../utils/constants");
const constants_3 = require("../utils/constants");
const constants_4 = require("../utils/constants");
const constants_5 = require("../utils/constants");
const constants_6 = require("../utils/constants");
const constants_7 = require("../utils/constants");
const constants_8 = require("../utils/constants");
class Hoodie extends Cloth_1.Cloth {
    constructor(name = constants_8.allClothesNames.UNDEFINED, brand = constants_3.brands.UNDEFINED, size = constants_4.sizes.UNDEFINED, color = constants_5.colors.UNDEFINED, material = constants_6.materials.UNDEFINED, gender = constants_7.genders.UNDEFINED, closureType = constants_1.closureTypes.UNDEFINED, hoodType = constants_2.hoodTypes.UNDEFINED) {
        super(name, brand, size, color, material, gender);
        this.closureType = closureType;
        this.hoodType = hoodType;
    }
    getClosureType() {
        return this.closureType;
    }
    getHoodType() {
        return this.hoodType;
    }
    setClosureType(closureType) {
        this.closureType = closureType;
    }
    setHoodType(hoodType) {
        this.hoodType = hoodType;
    }
    getAllInfoString() {
        const baseInfo = super.getAllInfoString();
        return `${baseInfo}, Closure Type: ${this.closureType}, Hood Type: ${this.hoodType}`;
    }
}
exports.Hoodie = Hoodie;
