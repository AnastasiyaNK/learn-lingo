import styled from "styled-components";
export const StyledButtonPrimary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 16px 16px;
  width: ${({ $width, $isResponsive }) => ($isResponsive ? "100%" : $width)};
  min-height: 60px;
  background: ${({ theme }) => theme.colors.accent};
  border: none;
  cursor: pointer;

  font-weight: 700;
  font-size: 18px;
  line-height: 1.56;
  color: ${({ theme }) => theme.colors.primary};
  gap: 8px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.accentHover};
  }
`;
export const StyledButtonSecondary = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 12px;
  padding: 14px 16px;
  width: ${({ $width, $isResponsive }) => ($isResponsive ? "100%" : $width)};
  border: none;
  background: ${({ theme }) => theme.colors.primary};
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  color: ${({ theme }) => theme.colors.white};
  gap: 8px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.colors.primary + "db"};
  }
`;
export const StyledButtonGhost = styled.button`
  border: none;
  background: transparent;
  font-weight: 700;
  font-size: 16px;
  line-height: 1.25;
  width: ${({ $width, $isResponsive }) => ($isResponsive ? "100%" : $width)};
  color: ${({ theme }) => theme.colors.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 14px 16px;
  transition: all 0.3s;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;
