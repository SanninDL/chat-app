import { Avatar, Badge, Button, Menu, MenuItem, Divider } from "@mui/material";
import React, { useState } from "react";
import useThemeContext from "../../hooks/useThemeContext";
import { Action, ChatItemWrap, Content, UnReadCount } from "./styled";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

interface ChatItemProps {
  avatar: string | null;
  userName: string;
  previewText: string;
  unReadCount: number;
  time: string;
  isOnline: boolean;
}

export const ChatItem = ({
  userName,
  avatar,
  isOnline,
  previewText,
  unReadCount,
  time
}: ChatItemProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const theme = useThemeContext();

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

  return (
    <ChatItemWrap>
      <div style={{ width: "20px" }}>
        {unReadCount !== 0 && <UnReadCount>3</UnReadCount>}
      </div>
      <Badge color='success' variant='dot' invisible={isOnline}>
        <Avatar alt={userName} src={avatar ? avatar : ""}>
          {!avatar && userName.slice(0, 1)}
        </Avatar>
      </Badge>
      <Content theme={theme}>
        <h5 style={unReadCount !== 0 ? { color: "#0a80ff" } : {}}>
          {userName}
        </h5>
        <p>{previewText}</p>
      </Content>
      <Action theme={theme}>
        <p>{time}</p>
        <Button onClick={handleClickMore}>
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
