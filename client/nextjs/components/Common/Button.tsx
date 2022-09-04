import styled from "@emotion/styled";
import { ButtonHTMLAttributes } from "react";

const Button = (props: ButtonHTMLAttributes<HTMLButtonElement>) => {
  return <StyledButton {...props} />;
};

export default Button;

const StyledButton = styled.button`
  padding: 8px;
  border: 1px solid #bebebe;
  border-radius: 8px;
`;
