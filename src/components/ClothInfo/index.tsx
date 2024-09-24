import { ReactElement, useRef, useEffect, useContext, useState } from "react";
import { Fragment } from "react";
import Intro from "../Intro";
import MenuLink from "../MenuLink";
import BasketLink from "../BasketLink";
import { IclothInMeta } from "../../interfaces";
import SaleLink from "../SaleLink";
import "./style.css";
export interface IClothInfoProps {
  selectCloth: IclothInMeta;
}

const ClothInfo = ({ selectCloth }: IClothInfoProps): ReactElement => {
  return (
    <div className="cloth-info-container">
      <p>{selectCloth.name}</p>
      <p>{`${selectCloth.price} €`}</p>
    </div>
  );
};

export default ClothInfo;
