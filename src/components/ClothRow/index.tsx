import { ReactElement, useRef, useEffect, useContext, useState } from "react";
import { Fragment } from "react";
import ClothRowImage from "../ClothRowImage";
import Slide from "../Slide";
import { IclothInMeta } from "../../interfaces";
import "./style.css";
export interface IClothRowProps {
  selectCloth: IclothInMeta;
}

const rowImageWidthInVw = 45;
const countImagesInRow: number = 3;


const ClothRow = ({ selectCloth }: IClothRowProps): ReactElement => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const imageKeys = Object.keys(selectCloth).filter((key) =>
    key.includes("Src")
  );
  const imageSources = imageKeys.map(
    (key) => selectCloth[key as keyof IclothInMeta]!
  );
  const moveRowContainer = () => {
    const offset = -currentIndex * rowImageWidthInVw;
    return { transform: `translateX(${offset}vw)` };
  };

  useEffect(() => {
    moveRowContainer();
  }, [currentIndex]);

  return imageSources.length === 0 ? (
    <p>Images about select cloth not found</p>
  ) : (
    <Fragment>
      <div className="row-container">
        <div className="images-row-container" style={moveRowContainer()}>
          {imageSources.map((imageSrc: string) => (
            <ClothRowImage key={imageSrc} imageSrc={imageSrc}/>
          ))}
        </div>
      </div>
      <Slide moveRow={() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % countImagesInRow);
          }} />
    </Fragment>
  );
};

export default ClothRow;
