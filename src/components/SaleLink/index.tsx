import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationPaths } from "../../router/routes";
import "./style.css";
const SaleLink = (): ReactElement => {
  const [activeClass, setActiveClass] = useState("sale-link-start");

  const handleClick = () => {
    setActiveClass("sale-link-clicked");
    setTimeout(() => {
      navigate(ApplicationPaths.SALE);
    }, 1000);
  };

  const navigate = useNavigate();
  return (
    <div className="sale-link-container">
      <img
        className={activeClass}
        src="/assets/images/common/startSaleImage.jpg"
        alt="logo"
        onClick={handleClick}
      />
    </div>
  );
};

export default SaleLink;
