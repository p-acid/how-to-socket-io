interface ChatListProps {
  chatList: any[];
}

const ChatList = ({ chatList }: ChatListProps) => {
  return (
    <ul>
      {chatList.map((chat) => (
        <li key={chat}>{chat}</li>
      ))}
    </ul>
  );
};

export default ChatList;
