import { useState } from "react";
import Router from "../../router/router";
import BasketContext, { TBasket } from "../BasketContext";
import "./style.css";
const App = () => {
  const [basket, setBasket] = useState<TBasket>([] as TBasket);

  return (
    <BasketContext.Provider value={{ basket, setBasket }}>
      <Router />
    </BasketContext.Provider>
  );
};

export default App;
