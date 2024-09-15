import { ReactElement } from "react";

const BrandLogo = (): ReactElement => {
  return (
    <div className="brandLogoContainer">
      <img
        className="image smallImage brandLogo"
        src="/assets/images/common/brandLogo.jpg"
        alt="logo"
      />
    </div>
  );
};

export default BrandLogo;
