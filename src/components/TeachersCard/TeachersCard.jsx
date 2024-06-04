import { StyledTeachersCard } from "./TeachersCard.styled";
import imgTeacher from "assets/images/avatar.png";
import IconBook from "assets/images/book-open.svg?react";
import IconStar from "assets/images/star.svg?react";

import IconHeart from "assets/images/heart.svg?react";
import CardAddition from "components/CardAddition/CardAddition";

const TeachersCard = () => {
  return (
    <StyledTeachersCard>
      <div className="bodyCardLeft">
        <img className="avatarTeacher" src={imgTeacher} alt="Teacher" />
      </div>

      <div className="bodyCardRight">
        <div className="topWrapper">
          <p className="text">Languages</p>
          <ul className="listInfo">
            <li className="itemInfo">
              <IconBook className="icon" />
              Lessons online |
            </li>
            <li className="itemInfo">Lessons done: 1098 |</li>
            <li className="itemInfo">
              <IconStar className="icon" />
              Rating: 4.8 |
            </li>
            <li className="itemInfo">
              Price / 1 hour: <span className="price">30$</span>
            </li>
          </ul>
        </div>

        <div className="midleWrapper">
          <h2 className="nameTeacher">Jane Smith</h2>
          <div className="infoTeacherWrapper">
            <p className="infoTeacher">
              Speaks: <span className="infoSpeaks">German, French</span>
            </p>
            <p className="infoTeacher">
              Lesson Info:
              <span className="infoDescription">
                Lessons are structured to cover grammar, vocabulary, and
                practical usage of the language.
              </span>
            </p>
            <p className="infoTeacher">
              Conditions:
              <span className="infoDescription">
                Welcomes both adult learners and teenagers (13 years and
                above).Provides personalized study plans
              </span>
            </p>
          </div>
          <button type="button" className="infoReadMore">
            Read more
          </button>
          <CardAddition />
        </div>
        <div className="levelWrapper">
          <ul className="levelList">
            <li className="levelItem active">#A1 Beginner</li>
            <li className="levelItem">#A2 Elementary</li>
            <li className="levelItem">#B2 Upper-Intermediate</li>
            <li className="levelItem">#A2 Elementary</li>
            <li className="levelItem">#B2 Upper-Intermediate</li>
          </ul>
        </div>
        <button type="button" className="trialLessonBtn">Book trial lesson</button>
      </div>
      <button type="button" className="heartBtn">
        <IconHeart className="heartIcon" />
      </button>
    </StyledTeachersCard>
  );
};

export default TeachersCard;
