import { Link } from "react-router-dom"
import IconLogo from 'assets/images/learnlogo.svg?react'
import IconLogIn from "assets/images/log-in-01.svg?react";
import { StyledHeader } from "./Header.styled";
import { Container } from "components/Container/Container";
import { ROUTE_PATH } from "constants/routest";


const Header = () => {
  return (
    <StyledHeader>
      <Container className="headerInner">
        <Link className="headerLogo">
          <IconLogo />
        </Link>
        <div className="headerlinksWrapper">
          <Link to={ROUTE_PATH.home} className="headerLink">
            Home
          </Link>
          <Link to={ROUTE_PATH.teachers} className="headerLink">
            Teachers
          </Link>
        </div>
        <div className="headerWrapperBtn">
          <button className="headerLoginBtn">
            <IconLogIn />
            Log in
          </button>
          <button className="headerRegisterBtn">Registration</button>
        </div>
      </Container>
    </StyledHeader>
  );
}

export default Header