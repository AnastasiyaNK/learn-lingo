import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 15px 0;

  .headerInner {
    display: flex;
    max-width: 1214px;
  }
  .headerLogo {
    display: flex;
    align-items: center;
  }
  .headerlinksWrapper {
    display: flex;
    gap: 28px;
    align-items: center;
    margin: 0 auto;
  }
  .headerLink {
    font-size: 16px;
    line-height: 1.25;
    color: #121417;
    text-decoration: none;
    transition: all 0.3s;

    &:hover,
    &:focus {
      color: #f0aa8d;
    }
  }
  .headerWrapperBtn {
    display: inline-flex;
    align-items: center;
    
  }
  .headerLoginBtn {
    border: none;
    background: transparent;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: #121417;
    display: inline-flex;
    align-items: center;
    gap: 8px;
  }
  .headerRegisterBtn {
    border-radius: 12px;
    padding: 14px 39px;
    border: none;
    background: #121417;
    font-weight: 700;
    font-size: 16px;
    line-height: 1.25;
    color: #fff;
  }
`;
