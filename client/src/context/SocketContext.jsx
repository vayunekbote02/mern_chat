import { createContext, useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext.jsx";
import io from "socket.io-client";

export const SocketContext = createContext();

export const SocketContextProvider = ({ children }) => {
  const [socket, setSocket] = useState(null);
  const [onlineUsers, setOnlineUsers] = useState([]);
  const { authUser } = useContext(AuthContext);
  // https://mern-chat-ilst.onrender.com
  useEffect(() => {
    if (authUser !== null) {
      const socket = io("https://mern-chat-ilst.onrender.com", {
        query: {
          userId: authUser._id,
        },
      });
      setSocket(socket);

      socket.on("getOnlineUsers", (users) => {
        setOnlineUsers(users);
      });

      return () => socket.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  const socketValues = { socket, onlineUsers };
  return (
    <SocketContext.Provider value={socketValues}>
      {children}
    </SocketContext.Provider>
  );
};
