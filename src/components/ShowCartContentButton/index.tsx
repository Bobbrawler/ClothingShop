import { ReactElement } from "react";
import "./style.css"
export interface IShowCartContentButtonProps {
    showClothInCart: () => void;
    styleCart: string;
}

const ShowCartContentButton = ({showClothInCart, styleCart}: IShowCartContentButtonProps): ReactElement => (
    <div>
        <img
          src="/assets/images/common/bagImage.png"
          alt="basket image"
          className={styleCart}
          onClick={showClothInCart}
        />
      </div>
)

export default ShowCartContentButton;