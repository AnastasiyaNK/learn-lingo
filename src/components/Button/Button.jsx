import { StyledButtonGhost, StyledButtonPrimary, StyledButtonSecondary } from "./Button.styled";
export const ButtonVariants = {
  PRIMARY: "primary",
  SECONDARY: "secondary",
  GHOST: "ghost",
};
export const ButtonSizes = {
    S: 's',
    M: 'm',
    L: 'l'
    
}
const SizeValues = {
  s: "110px",
  m: "165px",
  l: "260px",
};

const Button = ({
    children,
    variant = ButtonVariants.PRIMARY,
    size = ButtonSizes.M,
    isResponsive = false,
    type = "button",
    ...restProps
}) => {
    const buttonWidth = SizeValues[size];
    

  switch (variant) {
    case ButtonVariants.PRIMARY:
      return (
        <StyledButtonPrimary
          $isResponsive={isResponsive}
          $width={buttonWidth}
          type={type}
          {...restProps}
        >
          {children}
        </StyledButtonPrimary>
      );
    case ButtonVariants.SECONDARY:
      return (
        <StyledButtonSecondary
          $isResponsive={isResponsive}
          $width={buttonWidth}
          type={type}
          {...restProps}
        >
          {children}
        </StyledButtonSecondary>
      );
    case ButtonVariants.GHOST:
      return (
        <StyledButtonGhost
          $isResponsive={isResponsive}
          $width={buttonWidth}
          type={type}
          {...restProps}
        >
          {children}
        </StyledButtonGhost>
      );
      default: 
          return (
            <StyledButtonPrimary
              $isResponsive={isResponsive}
              $width={buttonWidth}
              type={type}
              {...restProps}
            >
              {children}
            </StyledButtonPrimary>
          );
  }

};

export default Button;
