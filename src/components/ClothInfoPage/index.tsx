import { ReactElement, useEffect, useContext, useState } from "react";
import { Fragment } from "react";
import Intro from "../Intro";
import MenuLink from "../MenuLink";
import BasketLink from "../BasketLink";
import ClothInfo from "../ClothInfo";
import ClothRow from "../ClothRow";
import AddCloth from "../AddCloth";
import AdditionalInfoAddCloth from "../AdditionalInfoAddCloth";
import { IclothInMeta } from "../../interfaces";
import { API } from "../../api";
import { useParams } from "react-router-dom";
import BasketContext, { TBasket } from "../BasketContext";
import SaleLink from "../SaleLink";
import "./style.css";
export interface IAdditionalInfoProps {
  cloth: IclothInMeta;
}
const ClothInfoPage = (): ReactElement => {
  const [addCartClass, setAddCartClass] = useState<string>("add-cloth-button-start");
  const [countClothes, setCountClothes] = useState<number>(0);
  const { basket, setBasket } = useContext(BasketContext);
  const { itemId: selectClothId } = useParams();
  const allClothes: IclothInMeta[] = API.getAllClothes();
  const selectCloth = allClothes.find((cloth) => cloth.id === selectClothId);
  const addCartTransition: number = 300;

  const addClothToCart = () => {
    if (!selectCloth) {
      console.error("ERROR: Not found select cloth with adding cloth to cart");
      return;
    }
    setAddCartClass("add-cloth-button-clicked");
    setTimeout(() => {
      setAddCartClass("add-cloth-button-start");
    },addCartTransition)
    const currentbasket: TBasket = [...basket];
    currentbasket.push(selectCloth.id);
    setBasket(currentbasket);
    setCountClothes(prevCount => prevCount + 1)
  };

  return !selectCloth ? (
    <p>Cloth not found</p>
  ) : (
    <Fragment>
      <MenuLink />
      <SaleLink />
      <BasketLink />
      <div className="all-cloth-info-container">
        <ClothInfo selectCloth={selectCloth} />
        <ClothRow selectCloth={selectCloth} />
      </div>
      <AdditionalInfoAddCloth imageSrc={selectCloth.imageSrcIntro} countClothes={countClothes}/>
      <AddCloth
        addCartClass={addCartClass}
        addClothToCart={() => {
          addClothToCart();
        }}
      />
      <Intro />
    </Fragment>
  );
};

export default ClothInfoPage;
