import { brands } from "../utils/constants";
import { sizes } from "../utils/constants";
import { colors } from "../utils/constants";
import { materials } from "../utils/constants";
import { genders } from "../utils/constants";
import { allClothesNames } from "../utils/constants";
export class Cloth {

  public name: allClothesNames;
  protected brand: brands;
  protected size: sizes;
  protected color: colors;
  protected material: materials;
  protected gender: genders;

  constructor(
    name: allClothesNames = allClothesNames.UNDEFINED,
    brand: brands = brands.UNDEFINED,
    size: sizes = sizes.UNDEFINED,
    color: colors = colors.UNDEFINED,
    material: materials = materials.UNDEFINED,
    gender: genders = genders.UNDEFINED
  ) {
    this.name = name;
    this.brand = brand;
    this.size = size;
    this.color = color;
    this.material = material;
    this.gender = gender;
  }

  getName(): string {
    return this.name;
  }

  getBrand(): brands {
    return this.brand;
  }

  getSize(): sizes {
    return this.size;
  }

  getColor(): colors {
    return this.color;
  }

  getMaterial(): materials {
    return this.material;
  }

  getGender(): genders {
    return this.gender;
  }

  setName(name: allClothesNames): void {
    this.name = name;
  }

  setBrand(brand: brands): void {
    this.brand = brand;
  }

  setSize(size: sizes): void {
    this.size = size;
  }

  setColor(color: colors): void {
    this.color = color;
  }

  setMaterial(material: materials): void {
    this.material = material;
  }

  setGender(gender: genders): void {
    this.gender = gender;
  }

  getAllInfoString(): string {
    return `Name: ${this.name}, Brand: ${this.brand}, Size: ${this.size}, Color: ${this.color}, Material: ${this.material}, Gender: ${this.gender}`;
  }
}
