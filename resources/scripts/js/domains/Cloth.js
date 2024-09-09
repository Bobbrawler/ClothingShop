"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloth = void 0;
const constants_1 = require("../utils/constants");
const constants_2 = require("../utils/constants");
const constants_3 = require("../utils/constants");
const constants_4 = require("../utils/constants");
class Cloth {
    constructor(brand = constants_1.brands.UNDEFINED, size = constants_2.sizes.UNDEFINED, color = constants_3.colors.UNDEFINED, material = constants_4.materials.UNDEFINED) {
        this.brand = brand;
        this.size = size;
        this.color = color;
        this.material = material;
    }
    getBrand() {
        return this.brand;
    }
    getSize() {
        return this.size;
    }
    getColor() {
        return this.color;
    }
    getMaterial() {
        return this.material;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    setSize(size) {
        this.size = size;
    }
    setColor(color) {
        this.color = color;
    }
    setMaterial(material) {
        this.material = material;
    }
    getAllInfoString() {
        return `Brand: ${this.brand}, Size: ${this.size}, Color: ${this.color}, Material: ${this.material}`;
    }
}
exports.Cloth = Cloth;
