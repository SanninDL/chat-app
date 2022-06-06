import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Avatar } from "@mui/material";
import React from "react";
import { FlexBox } from "../../styles/globalStyles";
import {
  Info,
  MessageText,
  MessageWrap,
  ReciveMessageText,
  UserWrap
} from "./styled";

interface MessageProps {
  user: User;
  message: Message;
  isRecive: boolean;
  isSameUser: boolean;
}

const message = {
  messageText: "You are good",
  createdAt: "11:05 AM",
  isRead: true
};
const user = {
  displayName: "Byrom Guittet"
};

export const Message = (props: any) => {
  const { isRecive, isSameUser } = props;

  return (
    <MessageWrap
      style={{ alignItems: `${isRecive ? "flex-start" : "flex-end"}` }}
    >
      {!isSameUser && (
        <UserWrap>
          <Avatar sx={{ height: "35px", width: "35px" }}>A</Avatar>
          <Info>
            <h5>{user.displayName}</h5>
            <p>{message.createdAt}</p>
          </Info>
        </UserWrap>
      )}
      {isRecive ? (
        <ReciveMessageText>{message.messageText}</ReciveMessageText>
      ) : (
        <FlexBox alignItems='flex-end' gap={"0 6px"}>
          {message.isRead && (
            <CheckCircleOutlinedIcon color='success' fontSize='small' />
          )}
          <MessageText>{message.messageText}</MessageText>
        </FlexBox>
      )}
    </MessageWrap>
  );
};
