import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import InventoryIcon from "@mui/icons-material/Inventory";
import PersonIcon from "@mui/icons-material/Person";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import {
  Avatar,
  Button,
  Divider,
  Menu,
  MenuItem,
  Tooltip
} from "@mui/material";
import React, { MouseEvent, useState } from "react";
import logoSrc from "../../assets/images/logo-light.png";
import useChatContext from "../../hooks/useChatContext";
import { Logo, NavWrap, TabItemButton, ThemeButton } from "./styled";

interface TabList {
  id: number;
  icon: JSX.Element;
  markcolor?: string;
  title: string;
}
const user = {
  name: "Duyen",
  avatar:
    "https://slek.laborasyon.com/demos/dark/dist/media/img/women_avatar5.jpg"
};
const tabList: Array<TabList> = [
  {
    id: 0,
    icon: <ChatOutlinedIcon />,
    markcolor: "rgb(255, 184, 34)",
    title: "Chats"
  },
  {
    id: 1,
    icon: <PersonIcon />,
    title: "Friends"
  },
  {
    id: 2,
    icon: <StarBorderIcon />,
    title: "Favorites"
  },
  {
    id: 3,
    icon: <InventoryIcon />,
    title: "Archived"
  }
];

export const NavGroup = () => {
  const { tabActive, setTabActive, darkMode, setDarkMode } = useChatContext();

  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAvatar = (event: MouseEvent<HTMLButtonElement>) => {
    if (anchorEl) {
      setAnchorEl(null);
    } else {
      setAnchorEl(event.currentTarget);
    }
  };
  return (
    <NavWrap>
      <Logo>
        <img src={logoSrc} alt='logo' />
      </Logo>
      {tabList.map((tab) => (
        <Tooltip title={tab.title} placement='right' key={tab.id}>
          <TabItemButton
            variant={tab.id === tabActive ? "contained" : "text"}
            onClick={() => setTabActive?.(tab.id)}
          >
            {tab.icon}
          </TabItemButton>
        </Tooltip>
      ))}

      <ThemeButton onClick={() => setDarkMode?.(!darkMode)}>
        <DarkModeOutlinedIcon color={darkMode ? "warning" : "primary"} />
      </ThemeButton>
      <Button onClick={handleClickAvatar}>
        <Avatar alt={user.name} src={user.avatar} />
      </Button>
      <Menu
        onClose={handleClose}
        open={Boolean(anchorEl)}
        sx={{ transform: "translateY(-60px)" }}
      >
        <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <Divider />
        <MenuItem onClick={handleClose} sx={{ color: "#fd397a" }}>
          Logout
        </MenuItem>
      </Menu>
    </NavWrap>
  );
};
