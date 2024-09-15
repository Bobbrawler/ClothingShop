import { type ReactElement } from "react";
import "./style.css";

// type size = string;

// export interface IClothes {
//   name: string;
//   size: size
//   pocketsCount?: number; 
// }

export interface IcartItem {
  id: string;
  name: string;
}

export interface ICartProps {
  cartItems: IcartItem[];
  testNumber: number;
}

const Cart = ({ cartItems, testNumber }: ICartProps): ReactElement => {
  return (
    <div className="cart-container">
      <h3>Items:</h3>
      <div className="cart-items">
        {cartItems.map((cartItem: IcartItem) => (
          <div className="cart-item" key={cartItem.id}>
            {cartItem.name} {testNumber}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
