import { Cloth } from "./Cloth";
import { fits } from "../utils/constants";
import { pocketCounts } from "../utils/constants";
import { brands } from "../utils/constants";
import { sizes } from "../utils/constants";
import { colors } from "../utils/constants";
import { materials } from "../utils/constants";
import { genders } from "../utils/constants";
import { allClothesNames } from "../utils/constants";

export class Pant extends Cloth {
  private fit: fits;
  private pocketCount: pocketCounts;

  constructor(
    name: allClothesNames = allClothesNames.UNDEFINED,
    brand: brands = brands.UNDEFINED,
    size: sizes = sizes.UNDEFINED,
    color: colors = colors.UNDEFINED,
    material: materials = materials.UNDEFINED,
    gender: genders = genders.UNDEFINED,
    fit: fits = fits.UNDEFINED,
    pocketCount: pocketCounts = pocketCounts.UNDEFINED
  ) {
    super(name, brand, size, color, material, gender);
    this.fit = fit;
    this.pocketCount = pocketCount;
  }

  getFit(): fits {
    return this.fit;
  }

  getPocketCount(): pocketCounts {
    return this.pocketCount;
  }

  setFit(fit: fits): void {
    this.fit = fit;
  }

  setPocketCount(pocketCount: pocketCounts): void {
    this.pocketCount = pocketCount;
  }

  getAllInfoString(): string {
    const baseInfo = super.getAllInfoString();
    return `${baseInfo}, Fit: ${this.fit}, Pocket Count: ${this.pocketCount}`;
  }
}
