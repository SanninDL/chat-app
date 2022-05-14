import styled from "@emotion/styled";
import React from "react";
import { ChatSidebarContainer } from "../../containers/ChatSidebarContainer";
import { NavGroupContainer } from "../../containers/NavGroupContainer";

const ChatWrap = styled.div`
  display: flex;
  width: 100vw;
  height: 100vh;
`;

export default function Chatpage() {
  return (
    <ChatWrap>
      <NavGroupContainer />
      <ChatSidebarContainer />
    </ChatWrap>
  );
}
