import { ReactElement } from "react";
import "./style.css"
export interface IAddClothProps {
    addClothToCart: () => void;
    addCartClass: string;
}

const AddCloth = ({addClothToCart, addCartClass}: IAddClothProps): ReactElement => (
    <div className="add-cart-container">
    <img
      src="/assets/images/common/bagImage.png"
      alt="addclothbutton"
      className={addCartClass}
      onClick={addClothToCart}
    />
  </div>
)

export default AddCloth;
