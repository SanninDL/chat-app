import { styled } from "@mui/material";

export const HeaderWrap = styled("div")`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 30px;
`;
export const Title = styled("div")`
  font-size: 22px;
  font-weight: 600;
  color: ${(props) => props.theme.custom.color};
`;
export const ControlWrap = styled("div")`
  display: flex;
  align-items: center;
`;
