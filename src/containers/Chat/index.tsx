import styled from "@emotion/styled";
import React from "react";
import { ChatHeader } from "../../components/ChatHeader";
import useThemeContext from "../../hooks/useThemeContext";

const Wrap = styled.div<ThemeProps>`
  flex: 1;
  border-left: 1px solid;
  border-right: 1px solid;
  border-color: ${(props) => props.theme.borderColor};
`;

export const Chat = () => {
  const theme = useThemeContext();

  const user = {
    displayName: "Duyen",
    avatar:
      "https://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar3.jpg"
  };
  return (
    <Wrap theme={theme}>
      <ChatHeader user={user} />
    </Wrap>
  );
};
