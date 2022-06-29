import { styled } from "@mui/material";

export const ChatFooterWrap = styled("div")`
  gap: 0;

  background-color: ${(props) => props.theme.custom.bgColor};
  padding: 17px 30px;
  border-top: 1px solid ${(props) => props.theme.custom.borderColor};
`;

export const ChatForm = styled("form")`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  button {
    margin-left: 16px;
  }
  button:first-of-type {
    margin-left: 0;
  }
`;
