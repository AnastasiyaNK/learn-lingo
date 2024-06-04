import styled from "styled-components";
export const StyledCardAddition = styled.div`
  .cardDescription {
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
    margin-bottom:32px;
  }
  .userList {
    list-style: none;
    display:flex;
    flex-direction:column;
    gap:32px;
  }
  .userItem {
 
  }
  .userWrapper {
    display: flex;
    gap: 12px;
    margin-bottom:16px;
  }
  .userInfo {
    display: flex;
    flex-direction:column;
    gap: 2px;
  }
  .userName {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #8a8a89;
  }
  .userRating {
    display: flex;
    gap: 8px;
    align-items: center;
  }
  .userComment {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
  }
`;