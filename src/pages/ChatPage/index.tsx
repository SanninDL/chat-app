import styled from "@emotion/styled";
import React from "react";
import { Chat } from "../../containers/Chat";
import { NavGroupContainer } from "../../containers/NavGroupContainer";
import { SidebarContainer } from "../../containers/SidebarContainer";
import useThemeContext from "../../hooks/useThemeContext";

const ChatWrap = styled("div")<ThemeProps>`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.bgColor};
`;

export default function Chatpage() {
  const theme = useThemeContext();
  return (
    <ChatWrap theme={theme}>
      <NavGroupContainer />
      <SidebarContainer />
      <Chat />
    </ChatWrap>
  );
}
