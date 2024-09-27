import styled from "styled-components";

export const StyledTeachersCard = styled.div`
  display: flex;
  background-color: #fff;
  border-radius: 24px;
  padding: 24px;
  position: relative;
  gap: 48px;
  .bodyCardLeft {
    border: 3px solid #fbe9ba;
    border-radius: 100px;
    width: 120px;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .avatarTeacher {
    border-radius: 50%;
    width: 96px;
    height: 96px;
  }
  .bodyCardRight {
    width: 100%;
  }
  .text {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #8a8a89;
  }
  .topWrapper {
    display: flex;
    margin-bottom: 8px;
    padding-right: 94px;
  }
  .listInfo {
    display: flex;
    gap: 16px;
    margin-left: auto;
  }
  .itemInfo {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 6px;
  }
  .price {
    color: #38cd3e;
  }
  .midleWrapper {
    margin-bottom: 32px;
  }
  .nameTeacher {
    font-weight: 500;
    font-size: 24px;
    line-height: 1;
    color: #121417;
    margin-bottom: 32px;
  }
  .infoTeacherWrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
    gap: 8px;
  }
  .infoTeacher {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #8a8a89;
  }
  .infoSpeaks {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    color: #121417;
  }
  .infoDescription {
    color: #121417;
  }
  .infoReadMore {
    font-weight: 500;
    font-size: 16px;
    line-height: 1.5;
    text-decoration: underline;
    text-decoration-skip-ink: none;
    color: #121417;
    cursor: pointer;
    border: none;
    background: transparent;
  }
  .levelWrapper {
    display: flex;
    margin-bottom: 32px;
  }

  .levelList {
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .levelItem {
    border: 1px solid rgba(18, 20, 23, 0.2);
    border-radius: 35px;
    padding: 8px 12px;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.14;
    color: #121417;
    align-items: center;
    &.active {
      background-color: #f0aa8d;
    }
  }

  .heartIcon {
    transition: all 0.3s;
    fill: white;
  }

  .heartBtn {
    cursor: pointer;
    transition: all 0.3s;
    background: transparent;
    border: none;
    position: absolute;
    top: 20px;
    right: 26px;
    &.active {
      color: #f0aa8d;
      .heartIcon {
        fill: #f0aa8d;
      }
    }
  }

  .trialLessonBtn {
    border-radius: 12px;
    padding: 16px 48px;
    background: #f0aa8d;
    font-weight: 700;
    font-size: 18px;
    line-height: 156%;
    color: #121417;
    cursor: pointer;
    border: none;
  }
`;
