import { ReactElement } from "react";
import { IclothInMeta } from "../../interfaces";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import ProductGridItem from "../ProductGridItem";
import "./style.css";
export interface IProductGridListProps {
  allClothes: IclothInMeta[];
}

const ProductGridList = ({
  allClothes,
}: IProductGridListProps): ReactElement => (
  <Fragment>
    {allClothes.map((cloth: IclothInMeta) => (
      <ProductGridItem cloth={cloth} />
    ))}
  </Fragment>
);

export default ProductGridList;
