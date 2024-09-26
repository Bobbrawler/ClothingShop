import { ReactElement } from "react";
import "./style.css";
import { useEffect } from "react";
import { useRef } from "react";
import { API } from "../../api";
import "./style.css";

const Intro = (): ReactElement => {
  const introOne = useRef<HTMLImageElement>(null);
  const introTwo = useRef<HTMLImageElement>(null);

  const allIntros: string[] = API.getAllIntroImagesNames();
  var src1: string = "introThree.jpg";
  var src2: string = "introFour.jpg";

  function getRandomElement<T>(array: T[], min: number, max: number): T {
    const randomIndex = Math.floor(Math.random() * (max - min + 1)) + min;
    return array[randomIndex];
  }

  const getRandomInt = (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const introLocation = () => {
    setTimeout(() => {
      console.log(allIntros)
      let oneImage = introOne.current;
      let twoImage = introTwo.current;
      if (!oneImage || !twoImage) {
        console.error("ERROR: not render intro images.");
        return;
      }
      let xOnePosition = getRandomInt(-5, 0);
      let yOnePosition = getRandomInt(-5, 0);
      let xTwoPosition = getRandomInt(0, 5);
      let yTwoPosition = getRandomInt(0, 5);
      src1 = getRandomElement(allIntros, 0, 3);
      src2 = getRandomElement(allIntros, 4, 7);
      oneImage.style.transform = `translate(${xOnePosition}vw, ${yOnePosition}vh)`;
      twoImage.style.transform = `translate(${xTwoPosition}vw, ${yTwoPosition}vh)`;
      oneImage.src = `/assets/images/common/intro/${src1}`;
      twoImage.src = `/assets/images/common/intro/${src2}`;
    }, 1);
  };

  useEffect(() => {
    introLocation();
  }, []);

  return (
    <div className="intro-content">
      <div>
        <img src="" alt="intro" className="intro-one" ref={introOne} />
      </div>
      <div>
        <img src="" alt="intro" className="intro-two" ref={introTwo} />
      </div>
    </div>
  );
};

export default Intro;
