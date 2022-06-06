import React, { MouseEvent, useState } from "react";

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
  Tooltip,
  useTheme
} from "@mui/material";
import { Logo, NavWrap, TabItemButton, ThemeButton } from "./styled";
import logoSrc from "../../assets/images/logo-light.png";
import logoBlackSrc from "../../assets/images/logo.png";
import defaultAvatar from "../../assets/images/default-avatar.png";

import { useAppDispatch, useAppSelector } from "../../redux/store";
import { setTabActive, setMode } from "../../redux/appSlice";

interface TabList {
  id: number;
  icon: JSX.Element;
  markcolor?: string;
  title: string;
}

const tabList: Array<TabList> = [
  {
    id: 0,
    icon: <ChatOutlinedIcon fontSize='small' />,
    markcolor: "rgb(255, 184, 34)",
    title: "Chats"
  },
  {
    id: 1,
    icon: <PersonIcon fontSize='small' />,
    title: "Friends"
  },
  {
    id: 2,
    icon: <StarBorderIcon fontSize='small' />,
    title: "Favorites"
  },
  {
    id: 3,
    icon: <InventoryIcon fontSize='small' />,
    title: "Archived"
  }
];

interface NavGroupProps {
  handleLogOut: () => void;
}

export const NavGroup = ({ handleLogOut }: NavGroupProps) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const { tabActive, mode } = useAppSelector((state) => state.app);
  const { user } = useAppSelector((state) => state.user);

  const theme = useTheme();
  const dispatch = useAppDispatch();

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
        <img src={mode === "dark" ? logoSrc : logoBlackSrc} alt='logo' />
      </Logo>
      {tabList.map((tab) => (
        <Tooltip title={tab.title} placement='right' key={tab.id}>
          <TabItemButton
            sx={
              tab.id === tabActive
                ? {
                    backgroundColor: theme.custom.tabActiveBg,
                    color: theme.custom.tabActiveColor
                  }
                : {}
            }
            onClick={() => dispatch(setTabActive(tab.id))}
          >
            {tab.icon}
          </TabItemButton>
        </Tooltip>
      ))}

      <ThemeButton
        onClick={() => dispatch(setMode(mode === "dark" ? "light" : "dark"))}
      >
        <DarkModeOutlinedIcon color={mode === "dark" ? "warning" : "primary"} />
      </ThemeButton>
      <Button onClick={handleClickAvatar}>
        <Avatar alt={user.userName} src={user.avatar || defaultAvatar} />
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
        <MenuItem onClick={handleLogOut} sx={{ color: "#fd397a" }}>
          Logout
        </MenuItem>
      </Menu>
    </NavWrap>
  );
};
