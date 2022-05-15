import styled from "@emotion/styled";

export const ChatItemWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 17px 30px;
  gap: 0 16px;
`;

export const UnReadCount = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #0a80ff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 11px;
`;

export const Content = styled("div")<ThemeProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5 {
    font-size: 16px;
    color: ${(props) => props.theme.color};
    margin-bottom: 5px;
  }
  p {
    color: ${(props) => props.theme.textGray};
  }
`;
export const Action = styled("div")<ThemeProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    color: ${(props) => props.theme.textGray};
    font-size: 11px;
  }
`;
