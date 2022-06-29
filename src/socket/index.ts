import { io, Socket } from "socket.io-client";
import { MESSAGE_EVENT } from "./constants";
import { messageSocketAction } from "./message.socket";

export const initSocket = (userId: number) => {
  const socket: Socket<ServerToClientEvents, ClientToServerEvents> = io(
    process.env.REACT_APP_SOCKET_DOMAIN,
    {
      query: {
        userId: userId
      },
    }
  );

  socket.on(MESSAGE_EVENT, messageSocketAction.message);

  return socket;
};