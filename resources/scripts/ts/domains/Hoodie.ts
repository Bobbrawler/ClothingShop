import { Cloth } from "./Cloth";
import { closureTypes } from "../utils/constants";
import { hoodTypes } from "../utils/constants";
import { brands } from "../utils/constants";
import { sizes } from "../utils/constants";
import { colors } from "../utils/constants";
import { materials } from "../utils/constants";
import { genders } from "../utils/constants";
import { allClothesNames } from "../utils/constants";
export class Hoodie extends Cloth {
  private closureType: closureTypes;
  private hoodType: hoodTypes;

  constructor(
    name: allClothesNames = allClothesNames.UNDEFINED,
    brand: brands = brands.UNDEFINED,
    size: sizes = sizes.UNDEFINED,
    color: colors = colors.UNDEFINED,
    material: materials = materials.UNDEFINED,
    gender: genders = genders.UNDEFINED,
    closureType: closureTypes = closureTypes.UNDEFINED,
    hoodType: hoodTypes = hoodTypes.UNDEFINED
  ) {
    super(name,brand,size,color,material,gender);
    this.closureType = closureType;
    this.hoodType = hoodType;
  }

  getClosureType(): closureTypes {
    return this.closureType;
  }

  getHoodType(): hoodTypes {
    return this.hoodType;
  }

  setClosureType(closureType: closureTypes): void {
    this.closureType = closureType;
  }

  setHoodType(hoodType: hoodTypes): void {
    this.hoodType = hoodType;
  }

  getAllInfoString(): string {
    const baseInfo = super.getAllInfoString();
    return `${baseInfo}, Closure Type: ${this.closureType}, Hood Type: ${this.hoodType}`;
  }
}