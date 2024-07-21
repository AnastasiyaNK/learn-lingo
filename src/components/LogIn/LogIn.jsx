import Modal from "components/Modal/Modal";
import IconEye from "assets/images/eye.svg?react";
import IconEyeSlash from "assets/images/eye-slash.svg?react";
import IconGoogle from "assets/images/google.svg?react";
import { StyledLogin } from "./LogIn.styled";
import { useState } from "react";
import { signInSchema } from "constants/schemas";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "service/base";
import Button, { ButtonVariants } from "components/Button/Button";

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

  const onSignInWithEmailAndPassword = (data) => {
    console.log(data);
    signInWithEmailAndPassword(auth, data.email, data.password)
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
      <StyledLogin onSubmit={handleSubmit(onSignInWithEmailAndPassword)}>
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
        <div className="buttonWrapper">
          <Button isResponsive type="submit">
            Log In
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
      </StyledLogin>
    </Modal>
  );
};

export default LogIn;
