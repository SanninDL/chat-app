import React, { useEffect, useMemo } from "react";
import { format } from "fecha";

import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import GroupIcon from "@mui/icons-material/Group";
import { ChatItem } from "../../components/ChatItem";
import { HeaderBar } from "../../components/HeaderBar";
import { SearchChat } from "../../components/SearchChat";

import { CustomButton } from "../../styles/globalStyles";
import { SidebarBody } from "./styled";

import { useGetChatState, useAppDispatch } from "../../redux/store";
import { fetchMessages, selectRoom } from "../../redux/chatSlice";

const url =
  "https://slek.laborasyon.com/demos/dark/dist/media/img/man_avatar1.jpg";

type format = (date: Date, format?: string) => string;

export const ChatSidebarContainer = () => {
  const { rooms } = useGetChatState();
  const dispatch = useAppDispatch();

  const chatItems = useMemo(() => {
    if (!rooms.length) return [];

    return rooms.map((room) => {
      return {
        roomId: room.roomId,
        roomName: room.roomName,
        avatar: room.roomAvatar,
        unReadCount: room.unReadMessages.length || 0,
        lastMessage: room.lastMessage.messageText,
        // time: format(room.lastMessage.createdAt, "hh::mm::ss",),
        time: format(new Date(room.lastMessage.createdAt), "hh:mm A"),
        isOnline: true
      };
    });
  }, [rooms]);

  const handleChangeRoom = (roomId: number) => {
    dispatch(selectRoom(roomId));
    dispatch(fetchMessages(roomId));
  };

  const Control = () => {
    return (
      <>
        <CustomButton>
          <GroupIcon />
        </CustomButton>
        <CustomButton>
          <AddCircleOutlineIcon />
        </CustomButton>
      </>
    );
  };

  return (
    <>
      <HeaderBar title='Chats' control={<Control />} />
      <SearchChat />
      <SidebarBody>
        {chatItems.map((item, index) => (
          <ChatItem {...item} key={index} handleChangeRoom={handleChangeRoom} />
        ))}
      </SidebarBody>
    </>
  );
};
