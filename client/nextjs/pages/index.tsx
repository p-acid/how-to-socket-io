import type { NextPage } from "next";
import { FormEvent, useCallback, useEffect, useState } from "react";
import { io } from "socket.io-client";

import ChatForm from "../components/ChatForm";
import ChatList from "../components/ChatList";

const socket = io("http://localhost:3000");

const Home: NextPage = () => {
  const [messageList, setMesssageList] = useState<string[]>([]);

  const submitMessage = useCallback(
    (event: FormEvent<HTMLFormElement>, data: any) => {
      event.preventDefault();

      console.log(data);
      console.log(messageList);

      socket.emit("message", data);
    },
    [messageList]
  );

  useEffect(() => {
    socket.on("message", (data) => {
      setMesssageList((prev) => [...prev, data]);
    });
  }, []);

  return (
    <main>
      <ChatList chatList={messageList} />
      <ChatForm onSubmit={submitMessage} />
    </main>
  );
};

export default Home;
