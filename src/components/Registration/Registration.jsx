import Modal from "components/Modal/Modal";
import { StyledRegister } from "./Registration.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import IconEye from "assets/images/eye.svg?react";
import IconEyeSlash from "assets/images/eye-slash.svg?react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signUpSchema } from "constants/schemas";

const Registration = ({ closeModal, title, text }) => {
  const [inputType, setInputType] = useState("password");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signUpSchema),
  });

  const onToggleInputType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  return (
    <Modal closeModal={closeModal} title={title} text={text}>
      <StyledRegister onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="inputWrapper">
          <label className="loginLabel">
            <input
              {...register("name")}
              className="loginInput"
              placeholder="Name"
              type="text"
            />
            {errors.name && <p className="errorsText">{errors.name.message}</p>}
          </label>
          <label className="loginLabel">
            <input
              {...register("email")}
              className="loginInput"
              placeholder="Email"
              type="text"
            />
            {errors.email && (
              <p className="errorsText">{errors.email.message}</p>
            )}
          </label>
          <label className="loginLabel">
            <input
              {...register("password")}
              className="loginInput"
              placeholder="Password"
              type={inputType}
            />
            {errors.password && (
              <p className="errorsText">{errors.password.message}</p>
            )}
            {inputType === "password" && (
              <IconEye onClick={onToggleInputType} className="eyeOpen" />
            )}
            {inputType === "text" && (
              <IconEyeSlash onClick={onToggleInputType} className="eyeSlash" />
            )}
          </label>
        </div>
        <button type="submit" className="loginBtn">
          Sign Up
        </button>
      </StyledRegister>
    </Modal>
  );
};

export default Registration;
