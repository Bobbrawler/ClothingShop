import { type ReactElement, Fragment, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationPaths } from "../../router/routes";
import BrandLogo from "../BrandLogo";
import "./style.css";

export interface IMenuItem {
  id: string;
  imageSrc: string;
  label: string;
  link: ApplicationPaths;
}

export interface IMenuItemsProps {
  menuItems: IMenuItem[];
}

const HomeMenu = (): ReactElement => {
  const navigate = useNavigate();
  
  const menuItems: IMenuItem[] = [
    {
      id: "sale",
      label: "SALE",
      link: ApplicationPaths.BASKET,
      imageSrc: "/assets/images/common/startSaleImage.jpg",
    },
    {
      id: "basket",
      label: "BASKET",
      link: ApplicationPaths.BASKET,
      imageSrc: "/assets/images/common/startBasketImage.jpg",
    },
  ];

  const MenuItemsList = memo(({ menuItems }: IMenuItemsProps): ReactElement => {



    return (
      <Fragment>
        {menuItems.map((menuItem: IMenuItem) => (
          <div
            className="navigatorImageContainer"
            key={menuItem.id}
            onClick={() => navigate(menuItem.link)}
          >
            <div className="overlayMenu">{menuItem.label}</div>
            <img
              className="image navigatorMenuImage"
              src={menuItem.imageSrc}
              alt={menuItem.label}
            />
          </div>
        ))}
      </Fragment>
    );
  });

  return (
    <div className="container">
      <BrandLogo />
      <div className="container navigation">
        <MenuItemsList menuItems={menuItems} />
      </div>
    </div>
  );
};

export default HomeMenu;
