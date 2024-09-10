import { Cloth } from "./Cloth";
import { embellishments } from "../utils/constants";
import { brands } from "../utils/constants";
import { sizes } from "../utils/constants";
import { colors } from "../utils/constants";
import { materials } from "../utils/constants";
import { genders } from "../utils/constants";
import { allClothesNames } from "../utils/constants";
export class Jacket extends Cloth {
  private embellishment: embellishments;

  constructor(
    name: allClothesNames = allClothesNames.UNDEFINED,
    brand: brands = brands.UNDEFINED,
    size: sizes = sizes.UNDEFINED,
    color: colors = colors.UNDEFINED,
    material: materials = materials.UNDEFINED,
    gender: genders = genders.UNDEFINED,
    embellishment: embellishments = embellishments.UNDEFINED,
  ) {
    super(name,brand,size,color,material,gender);
    this.embellishment = embellishment;
  }

  getEmbellishment(): embellishments {
    return this.embellishment;
  }

  setEmbellishment(embellishment: embellishments): void {
    this.embellishment = embellishment;
  }

  getAllInfoString(): string {
    const baseInfo = super.getAllInfoString();
    return `${baseInfo}, Embellishment: ${this.embellishment}`;
  }
}