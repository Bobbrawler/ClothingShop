import { type ReactElement, Fragment, memo } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationPaths } from "../../router/routes";
import MenuLink from "../MenuLink";
import "./style.css";
import Intro from "../Intro";

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

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    link: string
  ) => {
    const target = event.currentTarget as HTMLElement;
    const image = target.querySelector(
      ".navigator-menu-image-start"
    ) as HTMLElement;
    if (!image) {
      console.error("ERROR: navigate image not found.");
      return;
    }
    image.style.transform = "scale(1.5)";
    target.style.opacity = "0";
    setTimeout(() => {
      navigate(link);
    }, 1000);
  };

  const MenuItemsList = memo(({ menuItems }: IMenuItemsProps): ReactElement => {
    return (
      <Fragment>
        <div className="start-navigator">
          {menuItems.map((menuItem: IMenuItem) => (
            <div
              className="navigator-image-container"
              key={menuItem.id}
              onClick={(event) => handleClick(event, menuItem.link)}
            >
              <div className="overlay-menu">{menuItem.label}</div>
              <img
                className="navigator-menu-image-start"
                src={menuItem.imageSrc}
                alt={menuItem.label}
              />
            </div>
          ))}
        </div>
      </Fragment>
    );
  });

  return (
    <Fragment>
      <MenuLink />
      <Intro />
      <MenuItemsList menuItems={menuItems} />
    </Fragment>
  );
};

export default HomeMenu;
