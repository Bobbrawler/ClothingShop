import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationPaths } from "../../router/routes";
import "./style.css";
const BrandLogo = (): ReactElement => {

  const [activeClass, setActiveClass] = useState("brand-logo-start");

  const handleClick = () => {
    setActiveClass("brand-logo-clicked");
    setTimeout(() => {
      navigate(ApplicationPaths.HOME);
    }, 1000)
  }

  const navigate = useNavigate();
  return (
    <div className="brand-logo-container">
      <img
        className={activeClass}
        src="/assets/images/common/brandLogo.jpg"
        alt="logo"
        onClick={handleClick}
      />
    </div>
  );
};

export default BrandLogo;
