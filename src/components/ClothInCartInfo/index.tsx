import { ReactElement } from "react";
import { IclothInMeta } from "../../interfaces";
import { Fragment } from "react";
export interface IClothInCartInfoProps {
    cloth: IclothInMeta;
    propId: string;
}

const ClothInCartInfo = ({cloth, propId}: IClothInCartInfoProps): ReactElement => (
    cloth.hasOwnProperty(propId) &&
        !propId.includes("image") &&
        !propId.includes("price") &&
        !propId.includes("id") 
    ?
    (<div>{propId}: {cloth[propId as keyof IclothInMeta]}</div>)
    :
    (
        <Fragment></Fragment>
    )
)




export default ClothInCartInfo;