import { Link } from "react-router-dom";

import logo from "../../../images/logo.png";

import { GridWrapper, HeaderBar, Logo } from "./Header.styled";

const Header = (): JSX.Element => {
  return (
    <HeaderBar>
      <GridWrapper>
        <Logo>
          <Link to="/">
            <img src={logo} alt="Logo" />
          </Link>
        </Logo>
      </GridWrapper>
    </HeaderBar>
  );
};

export default Header;
