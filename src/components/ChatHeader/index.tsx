import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Avatar, Divider, Menu, MenuItem } from "@mui/material";
import React, { useState } from "react";
import defaultAvatar from "../../assets/images/default-avatar.png";
import { CustomButton } from "../../styles/globalStyles";
import { HeaderAction, HeaderChatWrap, HeaderInfo } from "./styled";

interface RoomValue {
  roomName: string;
  avatar: string;
}
interface ChatHeaderProps {
  room?: Room;
}

export const ChatHeader = ({ room }: ChatHeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <HeaderChatWrap>
      <HeaderInfo>
        <Avatar src={room?.roomAvatar || defaultAvatar}></Avatar>
        <div>
          <h5>{room?.roomName}</h5>
        </div>
      </HeaderInfo>
      <HeaderAction>
        <CustomButton onClick={handleClick}>
          <MoreHorizIcon />
        </CustomButton>
        <Menu
          open={Boolean(anchorEl)}
          onClose={handleClose}
          anchorEl={anchorEl}
        >
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Add to archive</MenuItem>
          <MenuItem onClick={handleClose}>Delete</MenuItem>
          <Divider />
          <MenuItem onClick={handleClose} sx={{ color: "#fd397a" }}>
            Block
          </MenuItem>
        </Menu>
      </HeaderAction>
    </HeaderChatWrap>
  );
};
