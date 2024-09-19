import { type ReactElement, Fragment, memo } from "react";
import { useNavigate } from "react-router-dom";
import MenuLink from "../MenuLink";
import "./style.css";
import { API } from "../../api";
import { IclothInMeta } from "../../interfaces";
import BasketLink from "../BasketLink";
import Intro from "../Intro";
export interface IclothInMetaProps {
  allClothes: IclothInMeta[];
}

const SalePage = (): ReactElement => {
  const navigate = useNavigate();
  const allClothes: IclothInMeta[] = API.getAllClothes();

  const handleClick = (
    event: React.MouseEvent<HTMLDivElement>,
    cloth: IclothInMeta
  ) => {
    const target = event.currentTarget as HTMLElement;
    const container = target.querySelector(
      ".sale-list-element-image-container"
    ) as HTMLElement;
    if (!container) {
      console.error("ERROR: container with image of sale list element not found.");
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
      <MenuLink />
      <BasketLink />
      <Intro />
      <div className="product-grid">
        <ProductGridList allClothes={allClothes} />
      </div>
    </Fragment>
  );
};

export default SalePage;
