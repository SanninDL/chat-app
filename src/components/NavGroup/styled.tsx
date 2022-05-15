import styled from "@emotion/styled";
import { Button } from "@mui/material";

export const NavWrap = styled("div")<ThemeProps>`
  width: 100px;
  color: ${(props) => props.theme.color};

  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;

  overflow: hidden;

  border-right: 1px solid ${(props) => props.theme.borderColor}; // dark mode
`;
export const Logo = styled.div`
  width: 30px;
  height: 80px;
  flex-shrink: 0;
  img {
    display: block;
    width: 100%;
    object-fit: contain;
  }
`;
export const TabItemButton = styled(Button)<ThemeProps>`
  width: 60px;
  min-width: 60px;
  height: 48px;
  border-radius: 6px;
  color: ${(props) => props.theme.tabColor};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 8px 0;
  flex-shrink: 0;
`;
export const ThemeButton = styled(TabItemButton)`
  margin-top: auto;
  flex-shrink: 0;
`;

export const UserIcon = styled.div`
  padding: 15px 0;
  flex-shrink: 0;
`;
