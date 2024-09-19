import { StyledCardAddition } from "./CardAddition.styled";
import IconUsers from "assets/images/users-avatar.svg?react";

import IconStar from "assets/images/star.svg?react";

const CardAddition = ({ reviews, experience }) => {
  return (
    <StyledCardAddition>
      <p className="cardDescription">{experience}</p>

      <ul className="userList">
        {reviews.map((item, index) => (
          <li key={index} className="userItem">
            <div className="userWrapper">
              <IconUsers className='userIcon' />
              {/* <img src={imgUsers} alt="frank" /> */}
              <div className="userInfo">
                <p className="userName">{item.reviewer_name}</p>
                <p className="userRating">
                  <IconStar />
                  {item.reviewer_rating}
                </p>
              </div>
            </div>
            <p className="userComment">{item.comment}</p>
          </li>
        ))}
      </ul>
    </StyledCardAddition>
  );
};

export default CardAddition;
