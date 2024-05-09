import { Link } from "react-router-dom"
import IconLogo from '../../assets/images/learnlogo.svg?react'
import IconLogIn from "../../assets/images/log-in-01.svg?react";
import { StyledHeader } from "./Header.styled";
import { Container } from "../../components/Container/Container";


const Header = () => {
  return (
    <StyledHeader>
      <Container className="headerInner">
        <Link>
          <IconLogo />
        </Link>
        <div>
          <Link className="headerlink">Home</Link>
          <Link className="headerLink">Teachers</Link>
        </div>
        <div>
          <button>
            <IconLogIn />
            Log in
          </button>
          <button>Registration</button>
        </div>
      </Container>
    </StyledHeader>
  );
}

export default Header