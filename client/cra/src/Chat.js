import { useCallback, useEffect, useRef, useState } from "react";

import { getChatTimeText } from "./utils/date";

const Chat = ({ socket, username, room }) => {
  const messageRef = useRef();
  const [messageList, setMessageList] = useState([]);

  const sendMessage = useCallback(
    async (event) => {
      event.preventDefault();

      const { value: message } = messageRef.current;

      if (message !== "") {
        const messageData = {
          room,
          author: username,
          message,
          time: new Date(),
        };

        await socket.emit("send_message", messageData);
        setMessageList((prev) => [...prev, messageData]);
      }

      event.target.reset();
    },
    [room, socket, username]
  );

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageList((prev) => [...prev, data]);
    });
  }, [socket]);

  return (
    <div className="chat-container">
      <div className="chat-header">
        <p>Live Chat!</p>
      </div>
      <div className="chat-body">
        {messageList.map((message) => {
          const userType = username === message.author ? "you" : "another";
          return (
            <div
              key={`chat-${message.author}-${new Date(message.time).getTime()}`}
              className={`chat-message chat-message-${userType}`}
            >
              <span
                className={`chat-message-content chat-message-content-${userType}`}
              >
                {message.message}
              </span>
              <div className="chat-message-info">
                <span className="chat-message-user">{message.author}</span>
                <span>{getChatTimeText(message.time)}</span>
              </div>
            </div>
          );
        })}
      </div>
      <form className="chat-footer" onSubmit={sendMessage}>
        <input type="text" placeholder="Write Message" ref={messageRef} />
        <button>Enter</button>
      </form>
    </div>
  );
};

export default Chat;
