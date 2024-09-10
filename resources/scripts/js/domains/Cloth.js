"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cloth = void 0;
const constants_1 = require("../utils/constants");
const constants_2 = require("../utils/constants");
const constants_3 = require("../utils/constants");
const constants_4 = require("../utils/constants");
const constants_5 = require("../utils/constants");
const constants_6 = require("../utils/constants");
class Cloth {
    constructor(name = constants_6.allClothesNames.UNDEFINED, brand = constants_1.brands.UNDEFINED, size = constants_2.sizes.UNDEFINED, color = constants_3.colors.UNDEFINED, material = constants_4.materials.UNDEFINED, gender = constants_5.genders.UNDEFINED) {
        this.name = name;
        this.brand = brand;
        this.size = size;
        this.color = color;
        this.material = material;
        this.gender = gender;
    }
    getName() {
        return this.name;
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
    getGender() {
        return this.gender;
    }
    setName(name) {
        this.name = name;
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
    setGender(gender) {
        this.gender = gender;
    }
    getAllInfoString() {
        return `Name: ${this.name}, Brand: ${this.brand}, Size: ${this.size}, Color: ${this.color}, Material: ${this.material}, Gender: ${this.gender}`;
    }
}
exports.Cloth = Cloth;
