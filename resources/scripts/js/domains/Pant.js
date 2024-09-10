"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pant = void 0;
const Cloth_1 = require("./Cloth");
const constants_1 = require("../utils/constants");
const constants_2 = require("../utils/constants");
const constants_3 = require("../utils/constants");
const constants_4 = require("../utils/constants");
const constants_5 = require("../utils/constants");
const constants_6 = require("../utils/constants");
const constants_7 = require("../utils/constants");
const constants_8 = require("../utils/constants");
class Pant extends Cloth_1.Cloth {
  constructor(
    name = constants_8.allClothesNames.UNDEFINED,
    brand = constants_3.brands.UNDEFINED,
    size = constants_4.sizes.UNDEFINED,
    color = constants_5.colors.UNDEFINED,
    material = constants_6.materials.UNDEFINED,
    gender = constants_7.genders.UNDEFINED,
    fit = constants_1.fits.UNDEFINED,
    pocketCount = constants_2.pocketCounts.UNDEFINED
  ) {
    super(name, brand, size, color, material, gender);
    this.fit = fit;
    this.pocketCount = pocketCount;
  }
  getFit() {
    return this.fit;
  }
  getPocketCount() {
    return this.pocketCount;
  }
  setFit(fit) {
    this.fit = fit;
  }
  setPocketCount(pocketCount) {
    this.pocketCount = pocketCount;
  }
  getAllInfoString() {
    const baseInfo = super.getAllInfoString();
    return `${baseInfo}, Fit: ${this.fit}, Pocket Count: ${this.pocketCount}`;
  }
}
exports.Pant = Pant;
