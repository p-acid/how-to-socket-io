import { useCallback, useState } from "react";
import io from "socket.io-client";
import "./App.css";
import Chat from "./Chat";

const socket = io.connect("http://localhost:3001");

function App() {
  const [username, setUsername] = useState();
  const [room, setRoom] = useState();
  const [isChatStarted, setIsChatStarted] = useState(false);

  const joinRoom = useCallback(
    (event) => {
      event.preventDefault();

      if (username !== "" && room !== "") {
        socket.emit("join_room", room);
        setIsChatStarted(true);
      }
    },
    [room, username]
  );

  return (
    <div className="App">
      {isChatStarted ? (
        <Chat socket={socket} username={username} room={room} />
      ) : (
        <>
          <h1>Join a Chat!</h1>
          <form onSubmit={joinRoom}>
            <input
              type="text"
              placeholder="john"
              onChange={({ target: { value } }) => setUsername(value)}
            />
            <input
              type="text"
              placeholder="Room ID"
              onChange={({ target: { value } }) => setRoom(value)}
            />
            <button>Join a Room</button>
          </form>
        </>
      )}
    </div>
  );
}

export default App;
