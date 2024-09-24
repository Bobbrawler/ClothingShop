import { ReactElement } from "react";
import "./style.css";
export interface IAdditionalInfoAddClothProps {
    imageSrc: string;
    countClothes: number;
}

const AdditionalInfoAddCloth = ({imageSrc, countClothes}: IAdditionalInfoAddClothProps): ReactElement => (
    <div 
    className="additional-info-add-cloth">
        <img
        className="additional-info-image" 
        src={`/assets/images/clothing/${imageSrc}`} 
        alt="" 
        />
        <div
        className="additional-info-count"
        >
        {countClothes}
        </div>

    </div>
)

export default AdditionalInfoAddCloth;