import React from "react";
import Container from "../../CommonComponents/Container";
import { assets } from "../../../helpers/AssetImgProvider.js";

const Header = () => {
  return (
    <div className="bg-gray-900">
      <Container>
        <div className="grid grid-cols-3">
          <div className="grid grid-cols-2 items-center">
            <img src={assets.headerLogo} alt={assets.headerLogo} />
            <h1 className=" heading3 text-gray-00">Friday</h1>
          </div>
          <div className="bg-secondary-300">50%</div>
          <div className="bg-primary-300">button</div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
