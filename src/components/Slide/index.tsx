import { ReactElement } from "react";
import "./style.css"
export interface ISlideProps {
    moveRow: () => void; 
}

const Slide = ({moveRow}: ISlideProps): ReactElement => (
  <div className="slide-button-container">
    <img
      src="/assets/images/common/slideButton.png"
      alt="slide"
      className="slide-button"
      onClick={moveRow}
    />
  </div>
);

export default Slide;
