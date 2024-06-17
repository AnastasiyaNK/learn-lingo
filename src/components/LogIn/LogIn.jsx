import Modal from "components/Modal/Modal"
import IconEye from "assets/images/eye.svg?react";
import IconEyeSlash from "assets/images/eye-slash.svg?react";
import { StyledLogin } from "./LogIn.styled";


const LogIn = ({ closeModal, title, text }) => {
  return (
    <Modal closeModal={closeModal} title={title} text={text}>
      <StyledLogin>
        <div className="inputWrapper">
          <label className="loginLabel">
            <input className="loginInput" placeholder="Email" name="email" />
          </label>
          <label className="loginLabel">
            <input
              className="loginInput"
              placeholder="Password"
              name="password"
            />
            <IconEye />
            <IconEyeSlash />
          </label>
        </div>
        <button type="submit" className="loginBtn">
          Log In
        </button>
      </StyledLogin>
    </Modal>
  );
};

export default LogIn