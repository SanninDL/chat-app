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
