import styled from "@emotion/styled";

export const HeaderWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 30px;
`;
export const Title = styled("div")<ThemeProps>`
  font-size: 22px;
  font-weight: 600;
  color: ${(props) => props.theme.color};
`;
export const ControlWrap = styled("div")<ThemeProps>`
  display: flex;
  align-items: center;
  button {
    padding: 8px 14px;
    color: ${(props) => props.theme.color};
    border-color: ${(props) => props.theme.borderColor};
  }
`;
