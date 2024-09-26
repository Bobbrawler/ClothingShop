import { ReactElement } from "react";
import "./style.css";
export interface ICartCheckoutFieldProps {
  totalAmount: number;
}

const CartCheckoutField = ({
  totalAmount,
}: ICartCheckoutFieldProps): ReactElement => (
  <div className="total-amount-container">
    <div className="checkout-button">go to checkout</div>
    <p>the cost of your basket:</p>
    <p className="total-amount">{`${totalAmount} €`}</p>
  </div>
);

export default CartCheckoutField;
