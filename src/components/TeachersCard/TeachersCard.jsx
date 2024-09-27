import { StyledTeachersCard } from "./TeachersCard.styled";
import IconBook from "assets/images/book-open.svg?react";
import IconStar from "assets/images/star.svg?react";

import IconHeart from "assets/images/heart.svg?react";
import CardAddition from "components/CardAddition/CardAddition";
import { useState } from "react";
import BookTrialModal from "components/BookTrialModal/BookTrialModal";
import Button, { ButtonSizes } from "components/Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedTeacherId, toggleFavoriteTeacher } from "store/teachersSlice";
import clsx from "clsx";
import { selectFavTeacherIds } from "store/selectors";

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
  teacherId,
  selectedLevel,
}) => {
  const dispatch = useDispatch();
  const favTeachersIds = useSelector(selectFavTeacherIds)
  const [openBookTrial, setOpenBookTrial] = useState(false);
  const [isReadMoreOpen, setIsReadMoreOpen] = useState(false);

  const toggleReadMore = () => {
    if (isReadMoreOpen) setIsReadMoreOpen(false);
    else {
      setIsReadMoreOpen(true);
    }
  };

  const onFavoriteTeacher = () => {
    dispatch(toggleFavoriteTeacher(teacherId));
  }

  const onOpenBookTrial = (teacherId) => {
    setOpenBookTrial(true);
    dispatch(setSelectedTeacherId(teacherId));
  };
  const onCloseBookTrial = () => {
    setOpenBookTrial(false);
  };

  const isTeacherFavorite = favTeachersIds.includes(teacherId);
 
  
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
          <h2 className="nameTeacher">
            {name} {surname}
          </h2>
          <div className="infoTeacherWrapper">
            <p className="infoTeacher">
              Speaks: <span className="infoSpeaks">{languages.join(", ")}</span>
            </p>
            <p className="infoTeacher">
              Lesson Info:
              <span className="infoDescription"> {lesson_info}</span>
            </p>
            <p className="infoTeacher">
              Conditions:
              <span className="infoDescription"> {conditions.join(" ")}</span>
            </p>
          </div>

          <button
            onClick={toggleReadMore}
            type="button"
            className="infoReadMore"
          >
            Read more
          </button>
          {isReadMoreOpen && (
            <CardAddition
              surname={surname}
              levels={levels}
              reviews={reviews}
              experience={experience}
            />
          )}
        </div>
        <div className="levelWrapper">
          <ul className="levelList">
            {levels.map((level) => (
              <li
                key={level}
                className={clsx("levelItem", {
                  active: level === selectedLevel?.value,
                })}
              >
                #{level}
              </li>
            ))}
          </ul>
        </div>
        {isReadMoreOpen && (
          <Button
            size={ButtonSizes.L}
            type="button"
            onClick={() => onOpenBookTrial(teacherId)}
          >
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
      <button
        onClick={onFavoriteTeacher}
        type="button"
        className={clsx("heartBtn", {
          active: isTeacherFavorite,
        })}
      >
        <IconHeart className="heartIcon" />
      </button>
    </StyledTeachersCard>
  );
};

export default TeachersCard;
