import { type ReactElement, Fragment } from "react";
import { ApplicationPaths } from "../../router/routes";
import MenuLink from "../MenuLink";
import "./style.css";
import Intro from "../Intro";
import MenuItemsList from "../MenuItemsList";

export interface IMenuItem {
  id: string;
  imageSrc: string;
  label: string;
  link: ApplicationPaths;
}

const HomeMenu = (): ReactElement => {

  const menuItems: IMenuItem[] = [
    {
      id: "sale",
      label: "SALE",
      link: ApplicationPaths.SALE,
      imageSrc: "/assets/images/common/startSaleImage.jpg",
    },
    {
      id: "basket",
      label: "BASKET",
      link: ApplicationPaths.BASKET,
      imageSrc: "/assets/images/common/startBasketImage.jpg",
    },
  ];

  return (
    <Fragment>
      <MenuLink />
      <Intro />
      <MenuItemsList menuItems={menuItems} />
    </Fragment>
  );
};

export default HomeMenu;
