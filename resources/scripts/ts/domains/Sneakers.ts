import { Cloth } from "./Cloth";
import { presencesLaces } from "../utils/constants";
import { soleMaterials } from "../utils/constants";
import { brands } from "../utils/constants";
import { sizes } from "../utils/constants";
import { colors } from "../utils/constants";
import { materials } from "../utils/constants";
import { genders } from "../utils/constants";
import { allClothesNames } from "../utils/constants";

export class Sneakers extends Cloth {
  private presenceLaces: presencesLaces;
  private soleMaterial: soleMaterials;

  constructor(
    name: allClothesNames = allClothesNames.UNDEFINED,
    brand: brands = brands.UNDEFINED,
    size: sizes = sizes.UNDEFINED,
    color: colors = colors.UNDEFINED,
    material: materials = materials.UNDEFINED,
    gender: genders = genders.UNDEFINED,
    presenceLaces: presencesLaces = presencesLaces.UNDEFINED,
    soleMaterial: soleMaterials = soleMaterials.UNDEFINED
  ) {
    super(name, brand, size, color, material, gender);
    this.presenceLaces = presenceLaces;
    this.soleMaterial = soleMaterial;
  }

  getPresenceLaces(): presencesLaces {
    return this.presenceLaces;
  }

  getSoleMaterial(): soleMaterials {
    return this.soleMaterial;
  }

  setPresenceLaces(presenceLaces: presencesLaces): void {
    this.presenceLaces = presenceLaces;
  }

  setSoleMaterial(soleMaterial: soleMaterials): void {
    this.soleMaterial = soleMaterial;
  }

  getAllInfoString(): string {
    const baseInfo = super.getAllInfoString();
    return `${baseInfo}, Presence Laces: ${this.presenceLaces}, Sole Materials: ${this.soleMaterial}`;
  }
}
