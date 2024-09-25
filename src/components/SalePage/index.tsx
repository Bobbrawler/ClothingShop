import { type ReactElement, Fragment, memo } from "react";
import { useNavigate } from "react-router-dom";
import MenuLink from "../MenuLink";
import "./style.css";
import { API } from "../../api";
import { IclothInMeta } from "../../interfaces";
import BasketLink from "../BasketLink";
import Intro from "../Intro";
import ProductGridList from "../ProductGridList";

const SalePage = (): ReactElement => {
  const allClothes: IclothInMeta[] = API.getAllClothes(); //TODO useCallback

  
  return (
    <Fragment>
      <MenuLink />
      <BasketLink />
      <Intro />
      <div className="product-grid">
        <ProductGridList allClothes={allClothes} />
      </div>
    </Fragment>
  );
};

export default SalePage;
