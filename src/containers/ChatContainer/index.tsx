import React, { useEffect, useMemo, useRef } from "react";
import { styled } from "@mui/material";

import { ReactComponent as NoRoomSelectedSvg } from "../../assets/svg/unselected-chat.svg";
import { ChatFooter } from "../../components/ChatFooter";
import { ChatHeader } from "../../components/ChatHeader";
import { Message } from "../../components/Message";

import { useGetChatState, useGetUserState } from "../../redux/store";

import { NoRoomSelected, ChatBody } from "./styled";
import { initSocket } from "../../socket";
import { Socket } from "socket.io-client";
import { MESSAGE_EVENT } from "../../socket/constants";

const Wrap = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;
  flex: 1;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: ${(props) => props.theme.custom.borderColor};
`;

export const ChatContainer = () => {
  const { currentRoomId, rooms, messages } = useGetChatState();
  const { user, logged } = useGetUserState();

  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    if (logged) {
      const socket = initSocket(user.userId);
      socketRef.current = socket;
    }
  }, []);

  const currentRoom = useMemo(() => {
    return rooms.find((room) => room.roomId === currentRoomId);
  }, [currentRoomId]);

  const handleSendMessage = (value: ChatFormValue) => {
    const payload: SendMessagePayload = {
      senderId: user.userId,
      roomId: currentRoomId,
      messageText: value.messageText,
    };
    socketRef.current?.emit(MESSAGE_EVENT, payload);
  };

  return (
    <Wrap>
      {currentRoomId ? (
        <>
          <ChatHeader room={currentRoom} />
          <ChatBody>
            {messages.map((message, index) => {
              const isSameUser =
                index !== 0
                  ? messages[index - 1].sender.userId === message.sender.userId
                  : false;
              return (
                <Message
                  key={message.messageId}
                  message={message}
                  isRecive={user.userId !== message.sender.userId}
                  isSameUser={isSameUser}
                />
              );
            })}
          </ChatBody>

          <ChatFooter onSubmitFunc={handleSendMessage} />
        </>
      ) : (
        <NoRoomSelected>
          <NoRoomSelectedSvg />
          <p>Select a chat to read messages</p>
        </NoRoomSelected>
      )}
    </Wrap>
  );
};
