import styled from "@emotion/styled";
import { FormEvent, useState } from "react";

import Button from "./Common/Button";
import Input from "./Common/Input";

interface ChatFormProps {
  onSubmit: (event: FormEvent<HTMLFormElement>, value: any) => void;
}

const ChatForm = ({ onSubmit }: ChatFormProps) => {
  const [message, setMessage] = useState("");

  return (
    <ChatFormWrapper onSubmit={(event) => onSubmit(event, message)}>
      <Input
        label="채팅"
        placeholder="채팅을 입력해주세요"
        onChange={({ target: { value } }) => setMessage(value)}
      />
      <Button>입력</Button>
    </ChatFormWrapper>
  );
};

export default ChatForm;

export const ChatFormWrapper = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 4px;
`;
