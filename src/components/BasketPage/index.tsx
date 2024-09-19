import React, { createElement, useRef } from "react";
import { useContext } from "react";
import { Fragment } from "react";
import { useState } from "react";
import SaleLink from "../SaleLink";
import BrandLogo from "../BrandLogo";
import { IclothInMeta } from "../../interfaces";
import { API } from "../../api";
import BasketContext, { TBasket } from "../../components/BasketContext";
import "./style.css";
const BasketPage = () => {
  const { basket } = useContext(BasketContext);
  const currentbasket: TBasket = [...basket];
  const allClothes: IclothInMeta[] = API.getAllClothes();
  const [styleCart, isStyleCart] = useState("bag-image-start");
  const [styleShoppingList, isStyleShoppingList] = useState(
    "shopping-list-start"
  );
  const shoppingList = useRef<HTMLDivElement>(null);
  var totalAmount: number = 0;

  const createShopListItem = (cloth: IclothInMeta): HTMLDivElement => {
    let listItem: HTMLDivElement = document.createElement("div");
    listItem.classList.add("list-item-container");
    let itemImage: HTMLImageElement = document.createElement("img");
    itemImage.src = `/assets/images/clothing/${cloth.imageSrcIntro}`;
    itemImage.classList.add("list-item-image");
    let itemInfo: HTMLDivElement = document.createElement("div");
    itemInfo.classList.add("item-info-container");
    for (let propId in cloth) {
      if (
        cloth.hasOwnProperty(propId) &&
        !propId.includes("image") &&
        !propId.includes("price") &&
        !propId.includes("id")
      ) {
        let key = propId as keyof IclothInMeta;
        let infoLine: HTMLDivElement = document.createElement("div");
        infoLine.textContent = `${propId}: ${cloth[key]}`;
        itemInfo.appendChild(infoLine);
      }
    }
    listItem.appendChild(itemImage);
    listItem.appendChild(itemInfo);
    return listItem;
  };

  const showClothInCart = () => {
    if (!shoppingList.current) {
      console.error("ERROR: shopping list not render");
      return;
    }
    const list = shoppingList.current as HTMLElement;
    for (const clothId of currentbasket) {
      let cloth = allClothes.find((cloth) => cloth.id === clothId);
      if (!cloth) {
        console.error("ERROR: Cloth not found with ID", clothId);
        break;
      }
      const listItem = createShopListItem(cloth) as HTMLDivElement;
      list.appendChild(listItem);
    }
    list.style.display = "flex";
    isStyleCart("bag-image-clicked");
    isStyleShoppingList("shopping-list-open");
  };

  for (const clothId of currentbasket) {
    let cloth = allClothes.find((cloth) => cloth.id === clothId);
    if (!cloth) {
      console.error("ERROR: Cloth not found with ID", clothId);
      return (
        <Fragment>
          <BrandLogo />
          <div>Error: Some items in your basket are not found.</div>
        </Fragment>
      );
    }
    totalAmount += Number(cloth.price);
  }

  return (
    <Fragment>
      <BrandLogo />
      <SaleLink />
      <div>
        <img
          src="/assets/images/common/bagImage.jpg"
          alt="basket image"
          className={styleCart}
          onClick={showClothInCart}
        />
      </div>

      <div className="total-amount-container">
        <div className="checkout-button">go to checkout</div>
        <p>the cost of your basket:</p>
        <p className="total-amount">{`${totalAmount} €`}</p>
      </div>

      <div className={styleShoppingList} ref={shoppingList}></div>
    </Fragment>
  );
};

export default BasketPage;
