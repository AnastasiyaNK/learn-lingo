import styled from "styled-components";
export const StyledLogin = styled.form`
  margin-top: 40px;
  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 40px;
  }
  .loginLabel {
    position: relative;
  }
  .loginInput {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    padding: 16px 18px 16px 18px;
    width: 100%;
    height: 54px;
    font-family: "Roboto", sans-serif;
    font-size: 16px;
    line-height: 1.37;
    color: #121417;

    &::placeholder {
      color: #121417;
    }
  }
  .buttonWrapper {
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  .googleIcon {
    width: 25px;
    height: 25px;
  }
  .eyeOpen {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 18px;
  }
  .googleText {
    font-weight:400;
    font-size: 16px;
    line-height: 1.37;
    color: rgba(18, 20, 23, 0.8);
  }
  .eyeSlash {
    position: absolute;
    transform: translateY(-50%);
    top: 50%;
    right: 18px;
  }
  .errorsText {
    position: absolute;
    font-size: 12px;
    line-height: 1.37;
    color: #e8362d;
    margin-top: 8px;
    bottom: -18px;
    left: 18px;
  }
`;