import React, { ReactElement, useRef, useEffect, useContext, useState } from "react";
import { Fragment } from "react";
import BrandLogo from "../BrandLogo";
import BasketLink from "../BasketLink";
import "./style.css";
import { IclothInMeta } from "../../interfaces";
import { API } from "../../api";
import { ApplicationPaths } from "../../router/routes";
import { useNavigate, useParams } from "react-router-dom";
import BasketContext, { TBasket } from "../../components/BasketContext";
import SaleLink from "../SaleLink";
const ClothInfo = (): ReactElement => {
  const navigate = useNavigate();
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

   
  const updateSlider = () => {
    if (!imagesRowContainer.current) {
      console.log("ERROR IMAGESROWCONTAINER");
      return;
    }
    const offset = -currentIndex * 400; 
    imagesRowContainer.current.style.transform = `translateX(${offset}px)`;
  };



  const addClothToCart = () => {
    if (!rowContainer.current || !infoContainer.current || !addCartContainer.current || !addCartImage.current || !slideButton.current || !selectClothId) {
      console.log("ERROR");
      return;
    }
    rowContainer.current.style.opacity = "0";
    infoContainer.current.style.opacity = "0";
    slideButton.current.style.opacity = "0";
    addCartContainer.current.style.bottom = "350px";
    addCartImage.current.style.transform = "scale(4)";
    const currentbasket: TBasket = [...basket];
    currentbasket.push(selectClothId)
    setBasket(currentbasket);
  }





  useEffect(() => {
    updateSlider();
  }, [currentIndex]);

  return (
    <Fragment>
      <BrandLogo />
      <SaleLink />
      <BasketLink />
      {selectCloth ? (
        <div>
          <div>
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
                src="/assets/images/common/imageRowArrow.jpg"
                alt="slide"
                className="slide-button"
                onClick={() => {
                  setCurrentIndex((prevIndex) => (prevIndex + 1) % 3); // Предполагается, что 3 изображения
                }}
                ref={slideButton}
              />
            </div>
          </div>

          <div className="cloth-info-container" ref={infoContainer}>
            <div>{selectCloth.name}</div>
            <div>{`${selectCloth.price} €`}</div>
          </div>

          <div className="add-cart-container" ref={addCartContainer}>
            <img 
              src="/assets/images/common/bagImage.jpg"
              alt="addclothbutton" 
              className="add-cloth-button"
              onClick={addClothToCart}
              ref={addCartImage}
            />
          </div>
        </div>
      ) : (
        <p>Cloth not found</p>
      )}
    </Fragment>
  );
};

export default ClothInfo;
