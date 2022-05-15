import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GroupIcon from "@mui/icons-material/Group";
import { Button } from "@mui/material";
import React from "react";
import { ChatItem } from "../../components/ChatItem";
import { HeaderBar } from "../../components/HeaderBar";
import { SearchChat } from "../../components/SearchChat";
import { SidebarBody } from "./styled";

const url =
  "https://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar1.jpg";
const Control = () => {
  return (
    <>
      <Button sx={{ marginLeft: "10px" }} variant='outlined'>
        <GroupIcon />
      </Button>
      <Button sx={{ marginLeft: "10px" }} variant='outlined'>
        <AddCircleOutlineIcon />
      </Button>
    </>
  );
};

export const ChatSidebarContainer = () => {
  const chatItemProps = {
    userName: "Duyen",
    isOnline: true,
    avatar: url,
    unReadCount: 3,
    previewText: "What's up, how are you?",
    time: "03:41 PM"
  };

  return (
    <>
      <HeaderBar title='Chats' control={<Control />} />
      <SearchChat />
      <SidebarBody>
        <ChatItem {...chatItemProps} />
      </SidebarBody>
    </>
  );
};
