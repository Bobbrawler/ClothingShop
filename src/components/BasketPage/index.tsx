import  React from "react";
import { useContext } from "react";
import { Fragment } from "react";
import BrandLogo from "../BrandLogo";
import { IclothInMeta } from "../../interfaces";
import { API } from "../../api";
import BasketContext, { TBasket } from "../../components/BasketContext";
import "./style.css";
const BasketPage = () => {
  const { basket } = useContext(BasketContext);
  const currentbasket: TBasket = [...basket];
  const allClothes: IclothInMeta[] = API.getAllClothes();

  var totalAmount: number = 0;

  for (const clothId of currentbasket) {
    let cloth = allClothes.find(cloth => cloth.id === clothId);
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

  // const showClothInCart = () => {
  //   for (const clothId of currentbasket) {
  //     let cloth = allClothes.find(cloth => cloth.id === clothId);
  //     if (!cloth) {
  //       console.error("ERROR: Cloth not found with ID", clothId);
  //       return (
  //         <Fragment>
  //           <BrandLogo />
  //           <div>Error: Some items in your basket are not found.</div>
  //         </Fragment>
  //       );
  //     }
  //   }
  // }

  return (
    <Fragment>
      <BrandLogo />
      <div>
        <img 
        src="/assets/images/common/bagImage.jpg" 
        alt="basket image"
        className="bag-image-basket-page"
        // onClick={showClothInCart}
        />
      </div>

      <div
      className="total-amount-container" 
      >
      {`${totalAmount} €`}
      </div>
    </Fragment>
  );
};

export default BasketPage;
