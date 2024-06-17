import styled from "styled-components";
export const StyledModal = styled.div`
  width: 100vw;
  height: 100dvh;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.8);

  .modal {
    border-radius: 30px;
    max-width: 600px;
    min-height: 200px;
    width: 100%;
    padding: 64px;
    background: #fff;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
  }
  .closeBtn {
    cursor: pointer;
    background: transparent;
    border: none;
    position:absolute;
    top:20px;
    right:20px;
  }
  .modalTitle {
    font-weight: 500;
    font-size: 40px;
    line-height: 1.2;
    letter-spacing: -0.02em;
    color: #121417;
   margin-bottom:20px;
  }
  .modalText {
    font-size: 16px;
    line-height: 1.37;
    color: rgba(18, 20, 23, 0.8);
  }
`;