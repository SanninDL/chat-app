import React from "react";
import { HeaderBar } from "../components/HeaderBar";
import GroupIcon from "@mui/icons-material/Group";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { Button } from "@mui/material";

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
  return (
    <div>
      <HeaderBar title='Chats' control={<Control />} />
    </div>
  );
};
