import { StyledBookTrialModal } from "./BookTrialModal.styled";
import Modal from "components/Modal/Modal";

import { bookTrialSchema } from "constants/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "components/Button/Button";
import { useSelector } from "react-redux";
import { selectTeacherId } from "store/selectors";
import teachersData from "../../db.json";

const BookTrialModal = ({ closeModal, title, text }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(bookTrialSchema),
  });

  const onSubmit = (values) => {
    console.log(values);
  }

  const selectedTeacherId = useSelector(selectTeacherId);
  const foundTeacher = teachersData.find((el) => el.id === selectedTeacherId);

  return (
    <Modal closeModal={closeModal} title={title} text={text}>
      <StyledBookTrialModal onSubmit={handleSubmit(onSubmit)}>
        <div className="teacherBlockWrapper">
          <img
            className="avatarImg"
            src={foundTeacher.avatar_url}
            alt={foundTeacher.name}
          />
          <div className="userInfo">
            <p className="yourTeacher">Your teacher</p>
            <p className="userName">{foundTeacher.name}</p>
          </div>
        </div>
        <h2 className="bookTrialTitle">
          What is your main reason for learning English?
        </h2>
        <div className="radioListLabel">
          <label className="radioLabel">
            <input
              className="radioInput"
              type="radio"
              {...register("reasonForLearning")}
              value="Career and business"
            />
            <span className="fake" />
            Career and business
          </label>
          <label className="radioLabel">
            <input
              className="radioInput"
              type="radio"
              {...register("reasonForLearning")}
              value="Lesson for kids"
            />
            <span className="fake" />
            Lesson for kids
          </label>
          <label className="radioLabel">
            <input
              className="radioInput"
              type="radio"
              {...register("reasonForLearning")}
              value="Living abroad"
            />
            <span className="fake" />
            Living abroad
          </label>
          <label className="radioLabel">
            <input
              className="radioInput"
              type="radio"
              {...register("reasonForLearning")}
              value="Exams and coursework"
            />
            <span className="fake" />
            Exams and coursework
          </label>
          <label className="radioLabel">
            <input
              className="radioInput"
              type="radio"
              {...register("reasonForLearning")}
              value="Culture, travel or hobby"
            />
            <span className="fake" />
            Culture, travel or hobby
          </label>
          {errors.reasonForLearning && (
            <p className="errorsText">{errors.reasonForLearning.message}</p>
          )}
        </div>

        <div className="inputWrapper">
          <label className="bookTrialLabel">
            <input
              {...register("fullName")}
              className="bookTrialInput"
              placeholder="Full Name"
              type="text"
            />
            {errors.fullName && (
              <p className="errorsText">{errors.fullName.message}</p>
            )}
          </label>
          <label className="bookTrialLabel">
            <input
              {...register("email")}
              className="bookTrialInput"
              placeholder="Email"
              type="text"
            />
            {errors.email && (
              <p className="errorsText">{errors.email.message}</p>
            )}
          </label>
          <label className="bookTrialLabel">
            <input
              {...register("phoneNumber")}
              className="bookTrialInput"
              placeholder="Phone number"
            />
            {errors.phoneNumber && (
              <p className="errorsText">{errors.phoneNumber.message}</p>
            )}
          </label>
        </div>
        <Button isResponsive type="submit">
          Book
        </Button>
      </StyledBookTrialModal>
    </Modal>
  );
};

export default BookTrialModal;
