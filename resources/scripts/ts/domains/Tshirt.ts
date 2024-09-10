import { Cloth } from "./Cloth";
import { designTypes } from "../utils/constants";
import { sleeveLengths } from "../utils/constants";
import { brands } from "../utils/constants";
import { sizes } from "../utils/constants";
import { colors } from "../utils/constants";
import { materials } from "../utils/constants";
import { genders } from "../utils/constants";
import { allClothesNames } from "../utils/constants";
export class Tshirt extends Cloth {
  private designType: designTypes;
  private sleeveLength: sleeveLengths;

  constructor(
    name: allClothesNames = allClothesNames.UNDEFINED,
    brand: brands = brands.UNDEFINED,
    size: sizes = sizes.UNDEFINED,
    color: colors = colors.UNDEFINED,
    material: materials = materials.UNDEFINED,
    gender: genders = genders.UNDEFINED,
    designType: designTypes = designTypes.UNDEFINED,
    sleeveLength: sleeveLengths = sleeveLengths.UNDEFINED
  ) {
    super(name,brand,size,color,material,gender);
    this.designType = designType;
    this.sleeveLength = sleeveLength;
  }

  getDesignType(): designTypes {
    return this.designType;
  }

  getSleeveLength(): sleeveLengths {
    return this.sleeveLength;
  }

  setDesignType(designType: designTypes): void {
    this.designType = designType;
  }

  setSleeveLength(sleeveLength: sleeveLengths): void {
    this.sleeveLength = sleeveLength;
  }

  getAllInfoString(): string {
    const baseInfo = super.getAllInfoString();
    return `${baseInfo}, Design Type: ${this.designType}, Sleeve Length: ${this.sleeveLength}`;
  }
}