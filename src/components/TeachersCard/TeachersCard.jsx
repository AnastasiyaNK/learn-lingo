import { StyledTeachersCard } from "./TeachersCard.styled";
import imgTeacher from "assets/images/avatar.png";
import IconBook from "assets/images/book-open.svg?react";
import IconStar from "assets/images/star.svg?react";

import IconHeart from "assets/images/heart.svg?react";
import CardAddition from "components/CardAddition/CardAddition";
import { useState } from "react";
import BookTrialModal from "components/BookTrialModal/BookTrialModal";
import Button, { ButtonSizes } from "components/Button/Button";

const TeachersCard = ({
  name,
  surname,
  languages,
  levels,
  rating,
  reviews,
  price_per_hour,
  lessons_done,
  
  avatar_url,
  lesson_info,
  conditions,
  experience,
}) => {
  const [openBookTrial, setOpenBookTrial] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const toggleReadMore = () => {
    if (isReadMoreOpen) setIsReadMoreOpen(false);
    else {
      setIsReadMoreOpen(true);
    }
  };

  const onOpenBookTrial = () => {
    setOpenBookTrial(true);
  };
  const onCloseBookTrial = () => {
    setOpenBookTrial(false);
  };
  return (
    <StyledTeachersCard>
      <div className="bodyCardLeft">
        <img className="avatarTeacher" src={avatar_url} alt={name} />
      </div>

      <div className="bodyCardRight">
        <div className="topWrapper">
          <p className="text">Languages</p>
          <ul className="listInfo">
            <li className="itemInfo">
              <IconBook className="icon" />
              Lessons online |
            </li>
            <li className="itemInfo">Lessons done: {lessons_done} |</li>
            <li className="itemInfo">
              <IconStar className="icon" />
              Rating: {rating} |
            </li>
            <li className="itemInfo">
              Price / 1 hour: <span className="price">{price_per_hour}$</span>
            </li>
          </ul>
        </div>

        <div className="midleWrapper">
          <h2 className="nameTeacher">{name}</h2>
          <div className="infoTeacherWrapper">
            <p className="infoTeacher">
              Speaks: <span className="infoSpeaks">{languages.join(", ")}</span>
            </p>
            <p className="infoTeacher">
              Lesson Info:
              <span className="infoDescription">{lesson_info}</span>
            </p>
            <p className="infoTeacher">
              Conditions:
              <span className="infoDescription">
               {conditions.join(' ')}
              </span>
            </p>
          </div>

          <button
            onClick={toggleReadMore}
            type="button"
            className="infoReadMore"
          >
            Read more
          </button>
          {isReadMoreOpen && <CardAddition />}
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
        {isReadMoreOpen && (
          <Button size={ButtonSizes.L} type="button" onClick={onOpenBookTrial}>
            Book trial lesson
          </Button>
        )}

        {openBookTrial && (
          <BookTrialModal
            closeModal={onCloseBookTrial}
            title={"Book trial lesson"}
            text={
              "Our experienced tutor will assess your current language level, discuss your learning goals, and tailor the lesson to your specific needs."
            }
          />
        )}
      </div>
      <button type="button" className="heartBtn">
        <IconHeart className="heartIcon" />
      </button>
    </StyledTeachersCard>
  );
};

export default TeachersCard;
