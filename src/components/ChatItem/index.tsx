import React, { useState } from "react";

import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import {
  Avatar,
  Badge,
  Button,
  Divider,
  Menu,
  MenuItem,
  useTheme
} from "@mui/material";
import { Action, ChatItemWrap, Content, UnReadCount } from "./styled";

import { useGetChatState } from "../../redux/store";

interface ChatItemProps {
  avatar: string | null;
  isOnline: boolean;
  lastMessage: string;
  unReadCount: number;
  roomName: string;
  roomId: number;
  time: string;
  handleChangeRoom: (roomId: number) => void;
}

export const ChatItem = ({
  roomName,
  roomId,
  avatar,
  lastMessage,
  unReadCount: unReadCountProp,
  time,
  isOnline = false,
  handleChangeRoom
}: ChatItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const [unReadCount, setUnReadCount] = useState<number>(unReadCountProp);
  const { currentRoomId } = useGetChatState();
  const theme = useTheme();

  const handleClickMore = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const onChangeRoom = () => {
    handleChangeRoom(roomId);
    setUnReadCount(0);
  };

  return (
    <ChatItemWrap
      onClick={onChangeRoom}
      sx={
        roomId === currentRoomId
          ? { backgroundColor: theme.custom.roomActiveBg }
          : {}
      }
    >
      {/* <div style={{ width: "20px" }}>
      </div> */}
      {unReadCount !== 0 && <UnReadCount>{unReadCount}</UnReadCount>}

      <Badge color='success' variant='dot' invisible={isOnline}>
        <Avatar
          alt={roomName}
          sx={{ height: "35px", width: "35px" }}
          src={avatar ? avatar : ""}
        >
          {!avatar && roomName.slice(0, 1)}
        </Avatar>
      </Badge>
      <Content>
        <h5 style={unReadCount !== 0 ? { color: "#0a80ff" } : {}}>
          {roomName}
        </h5>
        <p>{lastMessage}</p>
      </Content>
      <Action>
        <p style={unReadCount !== 0 ? { color: "#0a80ff" } : {}}>{time}</p>
        <Button
          onClick={handleClickMore}
          sx={
            !unReadCount
              ? { color: theme.custom.tabColor }
              : { color: "#0a80ff" }
          }
        >
          <MoreHorizIcon />
        </Button>

        <Menu
          onClose={handleClose}
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
        >
          <MenuItem onClick={handleClose}>Open</MenuItem>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Add to archive</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} sx={{ color: "#fd397a" }}>
            Delete
          </MenuItem>
        </Menu>
      </Action>
    </ChatItemWrap>
  );
};
