import { useContext, type ReactElement } from "react";
import { useParams } from "react-router-dom";
import BasketContext, { TBasket } from "../../components/BasketContext";
import "./style.css";

const ClothesPage = (): ReactElement => {
  const { itemId: clothesId } = useParams();

  const { basket, setBasket } = useContext(BasketContext);

  const addItemIdToBusket = (itemId: string | undefined): void => {
    if (!itemId) {
      return;
    }

    const currentbasket: TBasket = [...basket];
    currentbasket.push(itemId);
    setBasket(currentbasket);
  };

  const buttonClassName = basket.length ? "inactive" : "active";

  return (
    <div>
      <h1>The page of clothes {clothesId}</h1>
      <div>
        {basket.map((basketItem: string) => (
          <p key={basketItem}>{basketItem}</p>
        ))}
      </div>
      <div>
        <button
          onClick={() => addItemIdToBusket(clothesId)}
          className={buttonClassName}
        >
          ADD {clothesId}
        </button>
      </div>
    </div>
  );
};

export default ClothesPage;
