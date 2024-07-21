import { Link } from "react-router-dom";
import IconLogo from "assets/images/learnlogo.svg?react";
import IconLogIn from "assets/images/log-in-01.svg?react";
import { StyledHeader } from "./Header.styled";
import { Container } from "components/Container/Container";
import { ROUTE_PATH } from "constants/routest";
import { useState } from "react";
import LogIn from "components/LogIn/LogIn";
import Registration from "components/Registration/Registration";
import Button, { ButtonSizes, ButtonVariants } from "components/Button/Button";

const Header = () => {
  const [openLogIn, setOpenLogIn] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const onOpenLogIn = () => {
    setOpenLogIn(true);
  };
  const onOpenRegister = () => {
    setOpenRegister(true);
  };
  const onCloseLogIn = () => {
    setOpenLogIn(false);
  };
  const onCloseRegister = () => {
    setOpenRegister(false);
  };
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
          <Button size={ButtonSizes.S} variant={ButtonVariants.GHOST} onClick={onOpenLogIn}>
            <IconLogIn />
            Log in
          </Button>
          <Button variant={ButtonVariants.SECONDARY} onClick={onOpenRegister}>
            Registration
          </Button>
        </div>
        {openLogIn && (
          <LogIn
            closeModal={onCloseLogIn}
            title={"Log In"}
            text={
              "Welcome back! Please enter your credentials to access your account and continue your search for an teacher."
            }
          />
        )}
        {openRegister && (
          <Registration
            closeModal={onCloseRegister}
            title={"Registration"}
            text={
              "Thank you for your interest in our platform! In order to register, we need some information. Please provide us with the following information"
            }
          />
        )}
      </Container>
    </StyledHeader>
  );
};

export default Header;
