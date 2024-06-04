import { StyledCardAddition } from "./CardAddition.styled"
import imgUserFrank from "assets/images/user-frank.png";
import imgUserEve from "assets/images/user-eve.png";
import IconStar from "assets/images/star.svg?react";



const CardAddition = () => {
  return (
    <StyledCardAddition>
      <p className="cardDescription">
        Jane is an experienced and dedicated language teacher specializing in
        German and French. She holds a Bachelor&apos;s degree in German Studies
        and a Master&apos;s degree in French Literature. Her passion for
        languages and teaching has driven her to become a highly proficient and
        knowledgeable instructor. With over 10 years of teaching experience,
        Jane has helped numerous students of various backgrounds and proficiency
        levels achieve their language learning goals. She is skilled at adapting
        her teaching methods to suit the needs and learning styles of her
        students, ensuring that they feel supported and motivated throughout
        their language journey.
      </p>
      <ul className="userList">
        <li className="userItem">
          <div className="userWrapper">
            <img src={imgUserFrank} alt="frank" />
            <div className="userInfo">
              <p className="userName">Frank</p>
              <p className="userRating">
                <IconStar />
                4.0
              </p>
            </div>
          </div>
          <p className="userComment">
            Janes lessons were very helpful. I made good progress.
          </p>
        </li>
        <li className="userItem">
          <div className="userWrapper">
            <img src={imgUserEve} alt="eve" />
            <div className="userInfo">
              <p className="userName">Eve</p>
              <p className="userRating">
                <IconStar />
                5.0
              </p>
            </div>
          </div>
          <p className="userComment">
            Jane is an amazing teacher! She is patient and supportive.
          </p>
        </li>
      </ul>
    </StyledCardAddition>
  );
}

export default CardAddition