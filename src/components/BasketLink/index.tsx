import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationPaths } from "../../router/routes";
import "./style.css";
const BasketLink = (): ReactElement => {
  const [activeClass, setActiveClass] = useState("basket-link-start");

  const handleClick = () => {
    setActiveClass("basket-link-clicked");
    setTimeout(() => {
      navigate(ApplicationPaths.BASKET);
    }, 1000);
  };

  const navigate = useNavigate();
  return (
    <div className="basket-link-container">
      <img
        className={activeClass}
        src="/assets/images/common/startBasketImage.jpg"
        alt="logo"
        onClick={handleClick}
      />
    </div>
  );
};

export default BasketLink;
