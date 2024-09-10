"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sneakers = void 0;
const Cloth_1 = require("./Cloth");
const constants_1 = require("../utils/constants");
const constants_2 = require("../utils/constants");
const constants_3 = require("../utils/constants");
const constants_4 = require("../utils/constants");
const constants_5 = require("../utils/constants");
const constants_6 = require("../utils/constants");
const constants_7 = require("../utils/constants");
const constants_8 = require("../utils/constants");
class Sneakers extends Cloth_1.Cloth {
  constructor(
    name = constants_8.allClothesNames.UNDEFINED,
    brand = constants_3.brands.UNDEFINED,
    size = constants_4.sizes.UNDEFINED,
    color = constants_5.colors.UNDEFINED,
    material = constants_6.materials.UNDEFINED,
    gender = constants_7.genders.UNDEFINED,
    presenceLaces = constants_1.presencesLaces.UNDEFINED,
    soleMaterial = constants_2.soleMaterials.UNDEFINED
  ) {
    super(name, brand, size, color, material, gender);
    this.presenceLaces = presenceLaces;
    this.soleMaterial = soleMaterial;
  }
  getPresenceLaces() {
    return this.presenceLaces;
  }
  getSoleMaterial() {
    return this.soleMaterial;
  }
  setPresenceLaces(presenceLaces) {
    this.presenceLaces = presenceLaces;
  }
  setSoleMaterial(soleMaterial) {
    this.soleMaterial = soleMaterial;
  }
  getAllInfoString() {
    const baseInfo = super.getAllInfoString();
    return `${baseInfo}, Presence Laces: ${this.presenceLaces}, Sole Materials: ${this.soleMaterial}`;
  }
}
exports.Sneakers = Sneakers;
