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

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    link: string
  ) => {
    const target = event.currentTarget as HTMLElement;
    console.log(target);
    const image = target.querySelector(
      ".navigator-menu-image-start"
    ) as HTMLElement;
    if (!image) {
      console.log("ERROR IMAGE NOT FOUND");
      return;
    }
    image.style.transform = "scale(1.5)";
    target.style.opacity = "0";
    setTimeout(() => {
      navigate(link);
    }, 1000);
  };

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
        
        <div className="intro-content">
          <div>
            <img
              src="/assets/images/common/introOne.jpg"
              alt="intro"
              className="intro-one"
            />
          </div>
          <div
          >
            <img
              src="/assets/images/common/introTwo.jpg"
              alt="intro"
              className="intro-two"
            />
          </div>
        </div>
      </Fragment>
    );
  });

  return (
    <Fragment>
      <BrandLogo />
      <MenuItemsList menuItems={menuItems} />
    </Fragment>
  );
};

export default HomeMenu;
