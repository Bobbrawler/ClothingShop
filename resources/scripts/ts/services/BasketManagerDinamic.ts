import { Basket } from "../domains/Basket";
import { Cloth } from "../domains/Cloth";
import {
  currencies,
  allClothesNames,
  priceListInEuro,
} from "../utils/constants";
import { multipliersList } from "../utils/constants";

const productCheck = (cloth: Cloth): boolean => {
  for (let property in cloth) {
    if (cloth[property as keyof Cloth] === "Undefined") {
      return false;
    }
  }
  return true;
};

export class BasketManagerDinamic {
  private basket: Basket;
  private totalAmount: number = 0;
  private currency: currencies;

  constructor(basket: Basket, currency: currencies = currencies.EURO) {
    this.basket = basket;
    this.currency = currency;
  }

  updateTotalAmount = (cloth: Cloth, type: string) => {
    if (type === "add") {
      this.totalAmount +=
        priceListInEuro[cloth.name] * multipliersList[this.currency];
      return;
    }
    this.totalAmount -=
      priceListInEuro[cloth.name] * multipliersList[this.currency];
  };

  addItem(cloth: Cloth): void {
    if (!productCheck(cloth)) {
      console.error("ERROR! The product does not meet the standards");
      return;
    }
    this.basket.items.push(cloth);
    this.updateTotalAmount(cloth, "add");
  }

  removeItem(clothName: string): void {
    const clothesBasket = this.basket.items;
    const removeIndex = clothesBasket.findIndex(
      (cloth) => cloth.name === clothName
    );
    if (removeIndex === -1) {
      console.log("The selected item is not in the Basket");
      return;
    }
    this.updateTotalAmount(clothesBasket[removeIndex], "remove");
    clothesBasket.splice(removeIndex, 1);
  }

  getBasket(): Basket {
    return this.basket;
  }

  getTotalAmount(): number {
    return this.totalAmount;
  }

  getCurrency(): currencies {
    return this.currency;
  }

  setBasket(basket: Basket): void {
    this.basket = basket;
  }

  setCurrency(currency: currencies): void {
    this.currency = currency;
  }

  getAllInfoBasket(): void {
    if (this.basket.items.length === 0) {
      console.log("Basket is empty");
      return;
    }
    console.log(`Count clothes in Basket: ${this.basket.items.length}`);
    console.log(`Clothes in Basket:`);
    console.log(
      this.basket.items.map((cloth) => cloth.getAllInfoString()).join("\n")
    );
    console.log(
      `Total amount of Basket: ${this.getTotalAmount()} ${this.currency}`
    );
  }

  clear(): void {
    this.basket.items = [];
    this.totalAmount = 0;
  }
}
