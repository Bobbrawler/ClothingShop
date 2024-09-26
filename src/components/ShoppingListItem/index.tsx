import { ReactElement } from "react";
import { API } from "../../api";
import { IclothInMeta } from "../../interfaces";
import ClothInCartInfo from "../ClothInCartInfo";
export interface IShoppingListItemProps {
  clothId: string;
}

const ShoppingListItem = ({
  clothId,
}: IShoppingListItemProps): ReactElement => {
  const allClothes: IclothInMeta[] = API.getAllClothes();
  const cloth = allClothes.find((cloth) => cloth.id === clothId);
  if (!cloth) {
    return <p>Not found cloth with id: {clothId}</p>;
  }
  return(
    <div
    className="list-item-container"
    >
        <img
        className="list-item-image" 
        src={`/assets/images/clothing/${cloth.imageSrcIntro}`} 
        alt={`cloth image with id: ${clothId}`} 
        />
        <div
        className="item-info-container"
        >
            <div>
                {Object.keys(cloth).map(propId => (
                    <ClothInCartInfo cloth={cloth} propId={propId}/>
                ))}
            </div>

        </div>
    </div>
  )
};

export default ShoppingListItem;
