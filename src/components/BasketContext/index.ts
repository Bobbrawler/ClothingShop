import { createContext, Dispatch, SetStateAction } from "react";

export type TBasket = string[];

export interface IBasketContext {
  basket: TBasket;
  setBasket: Dispatch<SetStateAction<TBasket>>;
}

const BasketContext = createContext({} as IBasketContext);

export default BasketContext;
