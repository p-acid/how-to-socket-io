import styled from "@emotion/styled";
import Button from "./Common/Button";
import Input from "./Common/Input";

const ChatForm = () => {
  return (
    <ChatFormWrapper>
      <Input label="채팅" placeholder="채팅을 입력해주세요" />
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
