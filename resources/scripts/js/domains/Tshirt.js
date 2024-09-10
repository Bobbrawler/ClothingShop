"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tshirt = void 0;
const Cloth_1 = require("./Cloth");
const constants_1 = require("../utils/constants");
const constants_2 = require("../utils/constants");
const constants_3 = require("../utils/constants");
const constants_4 = require("../utils/constants");
const constants_5 = require("../utils/constants");
const constants_6 = require("../utils/constants");
const constants_7 = require("../utils/constants");
const constants_8 = require("../utils/constants");
class Tshirt extends Cloth_1.Cloth {
  constructor(
    name = constants_8.allClothesNames.UNDEFINED,
    brand = constants_3.brands.UNDEFINED,
    size = constants_4.sizes.UNDEFINED,
    color = constants_5.colors.UNDEFINED,
    material = constants_6.materials.UNDEFINED,
    gender = constants_7.genders.UNDEFINED,
    designType = constants_1.designTypes.UNDEFINED,
    sleeveLength = constants_2.sleeveLengths.UNDEFINED
  ) {
    super(name, brand, size, color, material, gender);
    this.designType = designType;
    this.sleeveLength = sleeveLength;
  }
  getDesignType() {
    return this.designType;
  }
  getSleeveLength() {
    return this.sleeveLength;
  }
  setDesignType(designType) {
    this.designType = designType;
  }
  setSleeveLength(sleeveLength) {
    this.sleeveLength = sleeveLength;
  }
  getAllInfoString() {
    const baseInfo = super.getAllInfoString();
    return `${baseInfo}, Design Type: ${this.designType}, Sleeve Length: ${this.sleeveLength}`;
  }
}
exports.Tshirt = Tshirt;
