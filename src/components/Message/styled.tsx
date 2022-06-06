import { styled } from "@mui/material";

export const MessageWrap = styled("div")`
  display: flex;
  flex-direction: column;
`;
export const UserWrap = styled("div")`
  display: flex;
  align-items: center;
  gap: 0 16px;
  margin-bottom: 16px;
`;
export const Info = styled("div")`
  display: flex;
  flex-direction: column;
  gap: 6px 0;
  h5 {
    color: ${(props) => props.theme.custom.color};
    font-size: 15px;
    text-align: left;
    font-weight: 500;
  }
  p {
    color: #828282;
    font-size: 12px;
  }
`;
export const Message = styled("div")`
  padding: 10px 20px;
  border-radius: 7px;
  font-size: 14px;
`;

export const MessageText = styled(Message)`
  background-color: ${(props) => props.theme.custom.messageBg};
  color: ${(props) => props.theme.custom.messageTextColor};
`;
export const ReciveMessageText = styled(Message)`
  background-color: ${(props) => props.theme.custom.reciveMessageBg};
  color: ${(props) => props.theme.custom.reciveMessageTextColor};
`;
