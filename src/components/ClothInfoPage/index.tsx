import  {
  ReactElement,
  useRef,
  useEffect,
  useContext,
  useState,
} from "react";
import { Fragment } from "react";
import Intro from "../Intro";
import MenuLink from "../MenuLink";
import BasketLink from "../BasketLink";
import "./style.css";
import { IclothInMeta } from "../../interfaces";
import { API } from "../../api";
import { useParams } from "react-router-dom";
import BasketContext, { TBasket } from "../BasketContext";
import SaleLink from "../SaleLink";

export interface IAdditionalInfoProps {
  cloth: IclothInMeta;
}
const countImagesInRow: number = 3;
const ClothInfo = (): ReactElement => {
  const { basket, setBasket } = useContext(BasketContext);
  const { itemId: selectClothId } = useParams();
  const allClothes: IclothInMeta[] = API.getAllClothes();
  const selectCloth = allClothes.find((cloth) => cloth.id === selectClothId);
  const imagesRowContainer = useRef<HTMLDivElement>(null);
  const infoContainer = useRef<HTMLDivElement>(null);
  const rowContainer = useRef<HTMLDivElement>(null);
  const addCartContainer = useRef<HTMLDivElement>(null);
  const addCartImage = useRef<HTMLImageElement>(null);
  const slideButton = useRef<HTMLImageElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const rowImageWidthInVw = 45;

  const updateSlider = () => {
    if (!imagesRowContainer.current) {
      console.error("ERROR: not found row container of images.");
      return;
    }
    const offset = -currentIndex * rowImageWidthInVw;
    imagesRowContainer.current.style.transform = `translateX(${offset}vw)`;
  };

  useEffect(() => {
    updateSlider();
  }, [currentIndex]);

  const Info = () => {

    if(!selectCloth) {
      return <p>Cloth not found</p>
    }
  
    const addClothToCart = () => {
      if (
        !rowContainer.current ||
        !infoContainer.current ||
        !addCartContainer.current ||
        !addCartImage.current ||
        !slideButton.current ||
        !selectClothId
      ) {
        console.error("ERROR: cloth info page's objects not found.");
        return;
      }
      addCartImage.current.style.transform = "scale(1.5)";
      const currentbasket: TBasket = [...basket];
      currentbasket.push(selectClothId);
      setBasket(currentbasket);
    };
  
    
    return (
      <div className="all-cloth-info-container">
        <div className="cloth-info-container" ref={infoContainer}>
          <p>{selectCloth.name}</p>
          <p>{`${selectCloth.price} €`}</p>
        </div>

        <div className="row-container" ref={rowContainer}>
          <div className="images-row-container" ref={imagesRowContainer}>
            <img
              src={`/assets/images/clothing/${selectCloth.imageSrcIntro}`}
              alt="imageIntro"
              className="image"
            />
            <img
              src={`/assets/images/clothing/${selectCloth.imageSrc2}`}
              alt="imageTwo"
              className="image"
            />
            <img
              src={`/assets/images/clothing/${selectCloth.imageSrc3}`}
              alt="imageThree"
              className="image"
            />
          </div>
          <p>Cloth not found</p>
        </div>

        <div className="slide-button-container">
          <img
            src="/assets/images/common/slideButton.png"
            alt="slide"
            className="slide-button"
            onClick={() => {
              setCurrentIndex(
                (prevIndex) => (prevIndex + 1) % countImagesInRow
              ); 
            }}
            ref={slideButton}
          />
        </div>

        <div className="add-cart-container" ref={addCartContainer}>
          <img
            src="/assets/images/common/bagImage.png"
            alt="addclothbutton"
            className="add-cloth-button"
            onClick={addClothToCart}
            ref={addCartImage}
          />
        </div>
      </div>
    )
  }

  return (
    <Fragment>
      <MenuLink />
      <SaleLink />
      <BasketLink />
      <Intro />
      <Info />
    </Fragment>
  );
};

export default ClothInfo;
