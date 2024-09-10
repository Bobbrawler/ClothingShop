export enum currencies {
  DOLLAR = "$",
  EURO = "€",
  RUBBLE = "₽",
  UNDEFINED = "Undefined",
}

type Multipliers = number;

export const multipliersList: Record<currencies, Multipliers> = {
  [currencies.DOLLAR]: 1.1,
  [currencies.RUBBLE]: 90,
  [currencies.EURO]: 1,
  [currencies.UNDEFINED]: 0,
};

export enum allClothesNames {
  KINGVAMPPANTS = "King Vamp Pants",
  PINKPYROPANTS = "Pink Pyro Pants",
  MEHPANTS = "Meh Pants",
  BENOJACKET = "Beno Jacket",
  CLASSICJACKET = "Classic Jacket",
  BREATHJACKET = "Breath Jacket",
  MARTENSBOOTS = "Martens Boots",
  MONKTSHIRT = "Monk T-shirt",
  PUNKHOODIE = "Punk Hoodie",
  UNDEFINED = "Undefined",
}

type Price = number;

export const priceListInEuro: Record<allClothesNames, Price> = {
  [allClothesNames.KINGVAMPPANTS]: 1257,
  [allClothesNames.PINKPYROPANTS]: 630,
  [allClothesNames.MEHPANTS]: 790,
  [allClothesNames.BENOJACKET]: 3450,
  [allClothesNames.CLASSICJACKET]: 4200,
  [allClothesNames.BREATHJACKET]: 3200,
  [allClothesNames.MARTENSBOOTS]: 400,
  [allClothesNames.MONKTSHIRT]: 200,
  [allClothesNames.PUNKHOODIE]: 560,
  [allClothesNames.UNDEFINED]: 0,
};

export enum genders {
  MEN = "Men",
  WOMEN = "Women",
  UNDEFINED = "Undefined",
}

export enum brands {
  RICKOWENS = "Rick Owens",
  BALENCIAGA = "Balenciaga",
  UNDEFINED = "Undefined",
}

export enum sizes {
  XS = "XS",
  S = "S",
  M = "M",
  L = "L",
  XL = "XL",
  XXL = "XXL",
  UNDEFINED = "Undefined",
}

export enum colors {
  BLACK = "Black",
  WHITE = "White",
  RED = "Red",
  GRAY = "Gray",
  UNDEFINED = "Undefined",
}

export enum materials {
  COTTON = "Cotton",
  LEATHER = "Leather",
  UNDEFINED = "Undefined",
}

export enum pocketCounts {
  ONE = "1",
  TWO = "2",
  THREE = "3",
  FOUR = "4",
  FIVE = "5,",
  UNDEFINED = "Undefined",
}

export enum fits {
  RELAXED = "Relaxed",
  SLIM = "Slim",
  OVERSIZE = "Oversize",
  NORMAL = "Normal",
  UNDEFINED = "Undefined",
}

export enum hoodTypes {
  ELONGATED = "Elongated",
  CROPPED = "Cropped",
  UNDEFINED = "Undefined",
}

export enum closureTypes {
  ZIPPER = "Zipper",
  WITHOUTCLASP = "Withou Clasp",
  UNDEFINED = "Undefined",
}

export enum presencesLaces {
  YES = "Yes",
  NO = "No",
  UNDEFINED = "Undefined",
}

export enum soleMaterials {
  RUBBER = "Rubber",
  LEATHER = "Leather",
  FOAM = "Foam",
  UNDEFINED = "Undefined",
}

export enum designTypes {
  HOLES = "Holes",
  DIRT = "Dirt",
  UNDEFINED = "Undefined",
}

export enum sleeveLengths {
  LONG = "Long",
  SHORT = "Short",
  UNDEFINED = "Undefined",
}

export enum embellishments {
  YES = "Yes",
  NO = "No",
  UNDEFINED = "Undefined",
}
