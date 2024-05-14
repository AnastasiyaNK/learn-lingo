import { Container } from "../../components/Container/Container";
import imgHero from "../../assets/images/block.png";
import { StyledHome } from "./Home.styled";

const Home = () => {
  return (
    <StyledHome>
      <section className="firstSection">
        <Container className="firstContainer">
          <div className="blockL">
            <h1 className="blockLTitle">
              Unlock your potential with the best{" "}
              <span className="blockLItalic">language</span> tutors
            </h1>
            <p className="blockLText">
              Embark on an Exciting Language Journey with Expert Language
              Tutors: Elevate your language proficiency to new heights by
              connecting with highly qualified and experienced tutors.
            </p>
            <button className="blockLBtn">Get started</button>
          </div>
          <div className="blockR">
            <img className="blockRImg" src={imgHero} alt="Learn Ligo" />
          </div>
        </Container>
      </section>
      <section className="secondSection">
        <Container className="secondContainer">
          <ul className="benefitsList">
            <li className="benefitsItem">
              <p className="benefitsNumber">32,000 +</p>{" "}
              <p className="benefitsText">Experienced tutors</p>
            </li>
            <li className="benefitsItem">
              <p className="benefitsNumber">300,000 +</p>{" "}
              <p className="benefitsText">5-star tutor reviews</p>
            </li>
            <li className="benefitsItem">
              <p className="benefitsNumber">120 +</p>{" "}
              <p className="benefitsText">Subjects taught</p>
            </li>
            <li className="benefitsItem">
              <p className="benefitsNumber">200 +</p>{" "}
              <p className="benefitsText">Tutor nationalities</p>
            </li>
          </ul>
        </Container>
      </section>
    </StyledHome>
  );
};

export default Home;
