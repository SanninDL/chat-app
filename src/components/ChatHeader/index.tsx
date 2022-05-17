import React, { useState } from "react";
import { Avatar, Button, Divider, Menu, MenuItem } from "@mui/material";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

import { HeaderAction, HeaderChatWrap, HeaderInfo } from "./styled";

import defaultAvatar from "../../assets/images/default-avatar.png";
import useThemeContext from "../../hooks/useThemeContext";

interface UserValue {
  displayName: string;
  avatar: string;
}
interface ChatHeaderProps {
  user: UserValue;
}

export const ChatHeader = ({ user }: ChatHeaderProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const theme = useThemeContext();
  const { displayName, avatar } = user;

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
      <HeaderInfo theme={theme}>
        <Avatar src={avatar || defaultAvatar}></Avatar>
        <div>
          <h5>{displayName}</h5>
          <p>writing...</p>
        </div>
      </HeaderInfo>
      <HeaderAction theme={theme}>
        <Button variant='outlined' onClick={handleClick}>
          <MoreHorizIcon />
        </Button>
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
