import styled from "@emotion/styled";
import { InputHTMLAttributes, ReactNode } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: ReactNode;
}

const Input = ({ label, ...restProps }: InputProps) => {
  return (
    <InputLabel htmlFor={restProps.id}>
      {label}
      <InputField {...restProps} />
    </InputLabel>
  );
};

export default Input;

const InputLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  font-size: 12px;
`;

const InputField = styled.input`
  padding: 8px;
  border: 1px solid #bebebe;
  border-radius: 8px;
`;
