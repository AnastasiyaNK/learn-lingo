import Modal from "components/Modal/Modal";
import { StyledRegister } from "./Registration.styled";
import { yupResolver } from "@hookform/resolvers/yup";
import IconEye from "assets/images/eye.svg?react";
import IconEyeSlash from "assets/images/eye-slash.svg?react";
import IconGoogle from "assets/images/google.svg?react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { signUpSchema } from "constants/schemas";
import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "service/base";
import Button, { ButtonVariants } from "components/Button/Button";

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
  const onGoogleAuth = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        // IdP data available using getAdditionalUserInfo(result)
        // ...
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };

 
  const onRegisterWithEmailAndPassword = (data) => {
    console.log(data);
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((userCredential) => {
        
          console.log(userCredential);
        
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <Modal closeModal={closeModal} title={title} text={text}>
      <StyledRegister onSubmit={handleSubmit(onRegisterWithEmailAndPassword)}>
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
        <div className="buttonWrapper">
          <Button isResponsive type="submit">
            Sign Up
          </Button>
          <Button
            variant={ButtonVariants.GHOST}
            isResponsive
            type="button"
            onClick={onGoogleAuth}
          >
            <IconGoogle className="googleIcon" />
            <span className="googleText"> Login with Google</span>
          </Button>
        </div>
      </StyledRegister>
    </Modal>
  );
};

export default Registration;
