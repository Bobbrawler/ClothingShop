"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.embellishments = exports.sleeveLengths = exports.designTypes = exports.soleMaterials = exports.presencesLaces = exports.closureTypes = exports.hoodTypes = exports.fits = exports.pocketCounts = exports.materials = exports.colors = exports.sizes = exports.brands = exports.genders = exports.priceListInEuro = exports.allClothesNames = exports.multipliersList = exports.currencies = void 0;
var currencies;
(function (currencies) {
    currencies["DOLLAR"] = "$";
    currencies["EURO"] = "\u20AC";
    currencies["RUBBLE"] = "\u20BD";
    currencies["UNDEFINED"] = "Undefined";
})(currencies || (exports.currencies = currencies = {}));
exports.multipliersList = {
    [currencies.DOLLAR]: 1.1,
    [currencies.RUBBLE]: 90,
    [currencies.EURO]: 1,
    [currencies.UNDEFINED]: 0
};
var allClothesNames;
(function (allClothesNames) {
    allClothesNames["KINGVAMPPANTS"] = "King Vamp Pants";
    allClothesNames["PINKPYROPANTS"] = "Pink Pyro Pants";
    allClothesNames["MEHPANTS"] = "Meh Pants";
    allClothesNames["BENOJACKET"] = "Beno Jacket";
    allClothesNames["CLASSICJACKET"] = "Classic Jacket";
    allClothesNames["BREATHJACKET"] = "Breath Jacket";
    allClothesNames["MARTENSBOOTS"] = "Martens Boots";
    allClothesNames["MONKTSHIRT"] = "Monk T-shirt";
    allClothesNames["PUNKHOODIE"] = "Punk Hoodie";
    allClothesNames["UNDEFINED"] = "Undefined";
})(allClothesNames || (exports.allClothesNames = allClothesNames = {}));
;
exports.priceListInEuro = {
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
var genders;
(function (genders) {
    genders["MEN"] = "Men";
    genders["WOMEN"] = "Women";
    genders["UNDEFINED"] = "Undefined";
})(genders || (exports.genders = genders = {}));
var brands;
(function (brands) {
    brands["RICKOWENS"] = "Rick Owens";
    brands["BALENCIAGA"] = "Balenciaga";
    brands["UNDEFINED"] = "Undefined";
})(brands || (exports.brands = brands = {}));
var sizes;
(function (sizes) {
    sizes["XS"] = "XS";
    sizes["S"] = "S";
    sizes["M"] = "M";
    sizes["L"] = "L";
    sizes["XL"] = "XL";
    sizes["XXL"] = "XXL";
    sizes["UNDEFINED"] = "Undefined";
})(sizes || (exports.sizes = sizes = {}));
var colors;
(function (colors) {
    colors["BLACK"] = "Black";
    colors["WHITE"] = "White";
    colors["RED"] = "Red";
    colors["GRAY"] = "Gray";
    colors["UNDEFINED"] = "Undefined";
})(colors || (exports.colors = colors = {}));
var materials;
(function (materials) {
    materials["COTTON"] = "Cotton";
    materials["LEATHER"] = "Leather";
    materials["UNDEFINED"] = "Undefined";
})(materials || (exports.materials = materials = {}));
var pocketCounts;
(function (pocketCounts) {
    pocketCounts["ONE"] = "1";
    pocketCounts["TWO"] = "2";
    pocketCounts["THREE"] = "3";
    pocketCounts["FOUR"] = "4";
    pocketCounts["FIVE"] = "5,";
    pocketCounts["UNDEFINED"] = "Undefined";
})(pocketCounts || (exports.pocketCounts = pocketCounts = {}));
var fits;
(function (fits) {
    fits["RELAXED"] = "Relaxed";
    fits["SLIM"] = "Slim";
    fits["OVERSIZE"] = "Oversize";
    fits["NORMAL"] = "Normal";
    fits["UNDEFINED"] = "Undefined";
})(fits || (exports.fits = fits = {}));
var hoodTypes;
(function (hoodTypes) {
    hoodTypes["ELONGATED"] = "Elongated";
    hoodTypes["CROPPED"] = "Cropped";
    hoodTypes["UNDEFINED"] = "Undefined";
})(hoodTypes || (exports.hoodTypes = hoodTypes = {}));
var closureTypes;
(function (closureTypes) {
    closureTypes["ZIPPER"] = "Zipper";
    closureTypes["WITHOUTCLASP"] = "Withou Clasp";
    closureTypes["UNDEFINED"] = "Undefined";
})(closureTypes || (exports.closureTypes = closureTypes = {}));
var presencesLaces;
(function (presencesLaces) {
    presencesLaces["YES"] = "Yes";
    presencesLaces["NO"] = "No";
    presencesLaces["UNDEFINED"] = "Undefined";
})(presencesLaces || (exports.presencesLaces = presencesLaces = {}));
var soleMaterials;
(function (soleMaterials) {
    soleMaterials["RUBBER"] = "Rubber";
    soleMaterials["LEATHER"] = "Leather";
    soleMaterials["FOAM"] = "Foam";
    soleMaterials["UNDEFINED"] = "Undefined";
})(soleMaterials || (exports.soleMaterials = soleMaterials = {}));
var designTypes;
(function (designTypes) {
    designTypes["HOLES"] = "Holes";
    designTypes["DIRT"] = "Dirt";
    designTypes["UNDEFINED"] = "Undefined";
})(designTypes || (exports.designTypes = designTypes = {}));
var sleeveLengths;
(function (sleeveLengths) {
    sleeveLengths["LONG"] = "Long";
    sleeveLengths["SHORT"] = "Short";
    sleeveLengths["UNDEFINED"] = "Undefined";
})(sleeveLengths || (exports.sleeveLengths = sleeveLengths = {}));
var embellishments;
(function (embellishments) {
    embellishments["YES"] = "Yes";
    embellishments["NO"] = "No";
    embellishments["UNDEFINED"] = "Undefined";
})(embellishments || (exports.embellishments = embellishments = {}));
