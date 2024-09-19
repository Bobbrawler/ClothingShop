import { ReactElement, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationPaths } from "../../router/routes";
import "./style.css";
const MenuLink = (): ReactElement => {
  const [activeClass, setActiveClass] = useState("menu-link-start");

  const handleClick = () => {
    setActiveClass("menu-link-clicked");
    setTimeout(() => {
      navigate(ApplicationPaths.HOME);
    }, 1000);
  };

  const navigate = useNavigate();
  return (
    <div className={activeClass} onClick={handleClick}>
      Rick Owens
    </div>
  );
};

export default MenuLink;
