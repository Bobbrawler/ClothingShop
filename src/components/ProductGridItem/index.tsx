import { ReactElement } from "react";
import { IclothInMeta } from "../../interfaces";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./style.css"

export interface IProductGridItemProps {
    cloth: IclothInMeta;
}

const ProductGridItem = ({cloth}: IProductGridItemProps): ReactElement => {
    const [clothContainerClass, setClothContainerClass] = useState<string>("sale-list-element-image-container-start")
    const navigate = useNavigate();
    const handleClick = (
      cloth: IclothInMeta
    ) => {
    setClothContainerClass("sale-list-element-image-container-clicked");
      setTimeout(() => {
        navigate(`/clothes/${cloth.id}`);
      }, 1000);
    };
    
    return(

        <div
            className="sale-list-item"
            key={cloth.id}
            onClick={() => {handleClick(cloth)}}
          >
            <div className={clothContainerClass}>
              <div className="overlay-menu"></div>
              <img
                src={`/assets/images/clothing/${cloth.imageSrcIntro}`}
                //TODO full image path
                alt={`cloth: ${cloth.name}`}
              />
            </div>
            <div>{cloth.name}</div>
            <div>{`${cloth.price} €`}</div>
          </div>
    )
}

export default ProductGridItem;