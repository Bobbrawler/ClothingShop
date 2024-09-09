import { brands } from "../utils/constants";
import { sizes } from "../utils/constants";
import { colors } from "../utils/constants";
import { materials } from "../utils/constants";

export class Cloth {
  private brand: brands;
  private size: sizes;
  private color: colors;
  private material: materials;

  constructor(
    brand: brands = brands.UNDEFINED,
    size: sizes = sizes.UNDEFINED,
    color: colors = colors.UNDEFINED,
    material: materials = materials.UNDEFINED
  ) {
    this.brand = brand;
    this.size = size;
    this.color = color;
    this.material = material;
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

  getAllInfoString(): string {
    return `Brand: ${this.brand}, Size: ${this.size}, Color: ${this.color}, Material: ${this.material}`;
  }
}
