import { ReactElement, memo, useState } from "react";
import { Fragment } from "react";
import { useNavigate } from "react-router-dom";
import { ApplicationPaths } from "../../router/routes";
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

export interface INavigationItemProps {
  menuItem: IMenuItem;
}

const transitionValue: number = 1000;

const NavigationItem = ({ menuItem }: INavigationItemProps): ReactElement => {
  const navigate = useNavigate();
  const [activeClass, setActiveClass] = useState(
    "navigator-image-container-start"
  );

  const handleClick = (link: ApplicationPaths) => {
    setActiveClass("navigator-image-container-clicked");
    setTimeout(() => {
      navigate(link);
    }, transitionValue);
  };

  return (
    <div
      className={activeClass}
      key={menuItem.id}
      onClick={() => handleClick(menuItem.link)}
    >
      <div className="overlay-menu">{menuItem.label}</div>
      <img
        className="navigator-menu-image"
        src={menuItem.imageSrc}
        alt={menuItem.label}
      />
    </div>
  );
};

const MenuItemsList = memo(({ menuItems }: IMenuItemsProps): ReactElement => {
  return (
    <Fragment>
      <div className="start-navigator">
        {menuItems.map((menuItem: IMenuItem) => (
          <NavigationItem key={menuItem.id} menuItem={menuItem} />
        ))}
      </div>
    </Fragment>
  );
});

export default MenuItemsList;
