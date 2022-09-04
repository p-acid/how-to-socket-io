import type { NextPage } from "next";
import ChatForm from "../components/ChatForm";
import ChatList from "../components/ChatList";

const Home: NextPage = () => {
  return (
    <main>
      <ChatList chatList={[]} />
      <ChatForm />
    </main>
  );
};

export default Home;
