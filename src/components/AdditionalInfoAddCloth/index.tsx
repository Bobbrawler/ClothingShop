import { ReactElement } from "react";
import "./style.css";
export interface IAdditionalInfoAddClothProps {
    clothName: string;
    countClothes: number;
    style: string;
}

const AdditionalInfoAddCloth = ({clothName, countClothes, style}: IAdditionalInfoAddClothProps): ReactElement => (
    <div 
    className={style}>
        <div
        className="additional-info-count"
        >
        `{countClothes} {clothName} added to cart`
        </div>
    </div>
)

export default AdditionalInfoAddCloth;