import { ReactElement } from "react";
import "./style.css"
export interface IClothRowImage {
  imageSrc: string;
}

const ClothRowImage = ({ imageSrc }: IClothRowImage): ReactElement => (
  <img
    key={imageSrc}
    className="image"
    src={`/assets/images/clothing/${imageSrc}`}
  ></img>
);

export default ClothRowImage;
