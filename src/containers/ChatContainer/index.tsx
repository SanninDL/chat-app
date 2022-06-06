import React from "react";
import { styled } from "@mui/material";

import { ReactComponent as NoRoomSelectedSvg } from "../../assets/svg/unselected-chat.svg";
import { ChatFooter } from "../../components/ChatFooter";
import { ChatHeader } from "../../components/ChatHeader";
import { Message } from "../../components/Message";

import { useAppSelector } from "../../redux/store";

import { NoRoomSelected } from "./styled";

const Wrap = styled("div")`
  position: relative;
  flex: 1;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: ${(props) => props.theme.custom.borderColor};
`;

export const ChatContainer = () => {
  const { currentRoomId } = useAppSelector((state) => state.chat);

  const user = {
    roomName: "Duyen",
    avatar:
      "https://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar3.jpg"
  };
  return (
    <Wrap>
      {currentRoomId ? (
        <>
          <ChatHeader room={user} />
          <div style={{ padding: "30px", marginTop: "80px" }}>
            <Message />
            <Message isRecive={true} />
          </div>
          <ChatFooter />
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
