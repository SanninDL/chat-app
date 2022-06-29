import { styled } from "@mui/material";

export const NoRoomSelected = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100%;
  svg {
    width: 200px;
    height: 200px;
  }
  p {
    color: ${(props) => props.theme.custom.color};
  }
`;
export const ChatBody = styled("div")`
  flex: 1;
  padding: 30px;

  overflow: auto;
  /* width */
  ::-webkit-scrollbar {
    width: 6px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: transparent;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;
