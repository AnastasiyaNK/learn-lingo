import styled from "styled-components";
export const StyledHome = styled.div`
  .firstSection {
  }
  .firstContainer {
    display: flex;
    gap: 24px;
    margin-bottom: 24px;
  }
  .blockL {
    border-radius: 30px;
    background: #f8f8f8;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 98px 64px;
    max-width: 720px;
    flex-shrink: 1;
  }
  .blockLTitle {
    font-weight: 500;
    font-size: 48px;
    line-height: 1.17;
    letter-spacing: -0.02em;
    color: #121417;
    margin-bottom: 32px;
  }
  .blockLItalic {
    font-style: italic;
    font-weight: 400;
    z-index: 1;
    padding: 0 5px;

    position: relative;
    &::before {
      content: "";
      width: 100%;
      height: 69%;
      position: absolute;
      left: 0;
      top: 12px;
      display: block;
      background-color: #edc9ba;
      border-radius: 5px;
      z-index: -1;
    }
  }
  .blockLText {
    font-family: var(--font-family);
    font-weight: 400;
    font-size: 16px;
    line-height: 1.37;
    letter-spacing: -0.02em;
    color: #121417;
    margin-bottom: 64px;
    max-width: 471px;
  }
  .blockLBtn {
    font-weight: 700;
    font-size: 18px;
    line-height: 1.56;
    color: #121417;
    border-radius: 12px;
    padding: 16px 88px;
    background: #f0aa8d;
    border: none;
  }
  .blockR {
    max-width: 568px;
    flex-shrink: 3;
  }

  .secondContainer {
  }

  .benefitsList {
    border: 1px dashed #f0aa8d;
    border-radius: 30px;
    padding: 40px 123px;
    display: flex;
    list-style: none;
    justify-content: space-between;
  }
  .benefitsItem {
    display: flex;
    align-items: center;
    gap: 16px;
  }
  .benefitsNumber {
    font-weight: 500;
    font-size: 28px;
    line-height: 1.14;
    letter-spacing: -0.02em;
    color: #121417;
  }
  .benefitsText {
    font-size: 14px;
    line-height: 1.29;
    letter-spacing: -0.02em;
    color: rgba(18, 20, 23, 0.7);
    max-width: 96px;
  }
`;