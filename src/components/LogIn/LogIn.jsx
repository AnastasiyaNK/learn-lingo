import Modal from "components/Modal/Modal";
import IconEye from "assets/images/eye.svg?react";
import IconEyeSlash from "assets/images/eye-slash.svg?react";
import { StyledLogin } from "./LogIn.styled";
import { useState } from "react";
import { signInSchema } from "constants/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const LogIn = ({ closeModal, title, text }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(signInSchema),
  });
  const [inputType, setInputType] = useState("password");
  const onToggleInputType = () => {
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };
  return (
    <Modal closeModal={closeModal} title={title} text={text}>
      <StyledLogin onSubmit={handleSubmit((data) => console.log(data))}>
        <div className="inputWrapper">
          <label className="loginLabel">
            <input
              {...register("email")}
              className="loginInput"
              placeholder="Email"
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
          Log In
        </button>
      </StyledLogin>
    </Modal>
  );
};

export default LogIn;
