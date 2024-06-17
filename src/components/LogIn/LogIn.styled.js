import styled from "styled-components";
export const StyledLogin = styled.form`
  margin-top: 40px;
  .inputWrapper {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-bottom: 40px;
  }
  .loginLabel {
  }
  .loginInput {
    border: 1px solid rgba(18, 20, 23, 0.1);
    border-radius: 12px;
    padding: 16px 18px 16px 18px;
    width: 100%;
    height: 54px;
  }
  .loginBtn {
    border-radius: 12px;
    padding: 16px 16px;
    width: 100%;
    height: 60px;
    background: #f4c550;
    border: none;
    cursor: pointer;

    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    color: #121417;
  }
`;