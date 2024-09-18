import { type ReactElement, Fragment, memo, useState } from "react";
import { useNavigate } from "react-router-dom";
import BrandLogo from "../BrandLogo";
import "./style.css";
import { API } from "../../api";
import { IclothInMeta } from "../../interfaces";
import { ApplicationPaths } from "../../router/routes";

export interface IclothInMetaProps {
  allClothes: IclothInMeta[];
}

const SalePage = (): ReactElement => {
  const navigate = useNavigate();
  const allClothes: IclothInMeta[] = API.getAllClothes();
  const [activeClass, setActiveClass] = useState("bag-image-start");

  const clickToBasketPage = () => {
    setActiveClass("bag-image-clicked");
    setTimeout(() => {
      navigate(ApplicationPaths.BASKET);
    },1000)
  }

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    cloth: IclothInMeta
  ) => {
    const target = event.currentTarget as HTMLElement;
    const container = target.querySelector(
      ".sale-list-element-image-container"
    ) as HTMLElement;
    if (!container) {
      console.log("ERROR CONTAINER NOT FOUND");
      return;
    }
    container.style.transform = "scale(1.1)";
    setTimeout(() => {
      navigate(`/clothes/${cloth.id}`);
    }, 1000);
  };

  const ProductGridList = memo(
    ({ allClothes }: IclothInMetaProps): ReactElement => {
      return (
        <Fragment>
          {allClothes.map((cloth: IclothInMeta) => (
            <div
              className="sale-list-item"
              key={cloth.id}
              onClick={(event) => handleClick(event, cloth)}
            >
              <div className="sale-list-element-image-container">
                <div className="overlay-menu"></div>
                <img
                  src={`/assets/images/clothing/${cloth.imageSrcIntro}`}
                  alt={`cloth: ${cloth.name}`}
                />
              </div>
              <div>{cloth.name}</div>
              <div>{`${cloth.price} €`}</div>
            </div>
          ))}
        </Fragment>
      );
    }
  );

  return (
    <Fragment>
      <BrandLogo />

      <div className="product-grid">
        <ProductGridList allClothes={allClothes} />
      </div>

      <div
      className="bag-container"
      >
        <img 
        src="/assets/images/common/bagImage.jpg" 
        alt="basket image"
        className={activeClass}
        onClick={clickToBasketPage}
        />
      </div>
    </Fragment>
  );
};

export default SalePage;
