import styled from "styled-components";
export const StyledButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 16px 16px;
  width: ${({ $width, $isResponsive }) => ($isResponsive ? "100%" : $width)};
  min-height: 60px;
  background: #f4c550;
  border: none;
  cursor: pointer;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: #121417;
  gap: 8px;
`;
export const StyledButtonSecondary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 14px 16px;
  width: ${({ $width, $isResponsive }) => ($isResponsive ? "100%" : $width)};
  border: none;
  background: #121417;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: #fff;
  gap: 8px;
`;
export const StyledButtonGhost = styled.button`
  border: none;
  background: transparent;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  width: ${({ $width, $isResponsive }) => ($isResponsive ? "100%" : $width)};
  color: #121417;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px;
`;
