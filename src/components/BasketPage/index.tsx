import { useContext } from "react";
import { Fragment } from "react";
import { useState } from "react";
import SaleLink from "../SaleLink";
import MenuLink from "../MenuLink";
import Intro from "../Intro";
import CartCheckoutField from "../CartCheckoutField";
import ShoppingListItem from "../ShoppingListItem";
import { IclothInMeta } from "../../interfaces";
import { API } from "../../api";
import ShowCartContentButton from "../ShowCartContentButton";
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
  var totalAmount: number = 0;


  const showClothInCart = () => {
    isStyleShoppingList("shopping-list-open");
    isStyleCart("bag-image-hidden");
  };

  const countTotalAmount = () => {
    for (const clothId of currentbasket) {
      let cloth = allClothes.find((cloth) => cloth.id === clothId);
      if (!cloth) {
        console.error("ERROR: Cloth not found with ID", clothId);
        return (
          <Fragment>
            <MenuLink />
            <div>Error: Some items in your basket are not found.</div>
          </Fragment>
        );
      }
      totalAmount += Number(cloth.price);
    }
  };

  countTotalAmount();

  return (
    <Fragment>
      <MenuLink />
      <SaleLink />
      <Intro />
      <ShowCartContentButton
        showClothInCart={showClothInCart}
        styleCart={styleCart}
      />
      <CartCheckoutField totalAmount={totalAmount} />
      <div className={styleShoppingList}>
        {currentbasket.map((clothId) => (
          <ShoppingListItem clothId={clothId} />
        ))}
      </div>
    </Fragment>
  );
};

export default BasketPage;
