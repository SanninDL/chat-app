import React from "react";
import { DEFAULT_AVATAR } from "../../helpers/constant";
import CheckCircleOutlinedIcon from "@mui/icons-material/CheckCircleOutlined";
import { Avatar } from "@mui/material";
import { FlexBox } from "../../styles/globalStyles";
import {
  Info,
  MessageText,
  MessageWrap,
  ReciveMessageText,
  UserWrap
} from "./styled";

import { format } from "fecha";

interface MessageProps {
  message: Message;
  isRecive: boolean;
  isSameUser: boolean;
}

export const Message = (props: MessageProps) => {
  const { isRecive, isSameUser, message } = props;

  return (
    <MessageWrap
      style={{ alignItems: `${isRecive ? "flex-start" : "flex-end"}` }}
    >
      {!isSameUser && (
        <UserWrap>
          <Avatar
            sx={{ height: "35px", width: "35px" }}
            src={message.sender.avatar || DEFAULT_AVATAR}
          ></Avatar>
          <Info>
            <h5>{message.sender.displayName}</h5>
            <p>{format(new Date(message.createdAt), "D/MM hh:mm A")}</p>
          </Info>
        </UserWrap>
      )}
      {isRecive ? (
        <ReciveMessageText>{message.messageText}</ReciveMessageText>
      ) : (
        <FlexBox alignItems='flex-end' gap={"0 6px"}>
          {message.isRead === 0 && (
            <CheckCircleOutlinedIcon color='success' fontSize='small' />
          )}
          <MessageText>{message.messageText}</MessageText>
        </FlexBox>
      )}
    </MessageWrap>
  );
};
