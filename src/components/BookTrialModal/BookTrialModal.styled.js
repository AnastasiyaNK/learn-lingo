import styled from "styled-components";
export const StyledBookTrialModal = styled.form`
  padding-top: 20px;

  .teacherBlockWrapper {
    display: flex;
    gap: 14px;
    margin-bottom: 40px;
  }
  .avatarImg {
    width: 44px;
    height: 44px;
    border-radius: 50%;
  }
  .userInfo {
    display: flex;
    flex-direction: column;
  }
  .yourTeacher {
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;
    color: #8a8a89;
  }
  .userName {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
  }
  .bookTrialTitle {
    font-weight: 500;
    font-size: 24px;
    line-height: 1.33;
    color: #121417;
    margin-bottom: 20px;
  }
  .radioListLabel {
    position: relative;
    display: flex;
    flex-direction: column;
    gap: 16px;
    margin-bottom: 40px;
  }
  .radioLabel {
    font-size: 16px;
    line-height: 1.37;
    display: flex;
    gap: 8px;
    color: #121417;
    align-items: center;
  }
  .radioInput {
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
  }
  .radioInput:focus + .fake {
    outline: 2px solid #121417;
    box-shadow: 1px 1px 1px black;
  }
  .radioInput:checked + .fake {
    border: 2px solid #f0aa8d;

    &::after {
      background-color: #f0aa8d;
    }
  }
  .fake {
    position: relative;
    border-radius: 50%;
    display: flex;
    width: 20px;
    height: 20px;
    border: 2px solid #a7a6a7;
    transition: all 0.3s;

    &::after {
      content: "";
      display: block;
      width: 10px;
      height: 10px;
      background-color: transparent;

      border-radius: 50%;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: all 0.3s;
    }
  }
  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 40px;
  }
  .bookTrialLabel {
    position: relative;
  }
  .bookTrialInput {
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
  .bookTrialBtn {
    border-radius: 12px;
    padding: 16px 16px;
    width: 100%;
    height: 60px;
    background: #f0aa8d;
    border: none;
    cursor: pointer;

    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    color: #121417;
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
