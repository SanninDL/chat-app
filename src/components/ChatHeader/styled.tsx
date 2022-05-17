import styled from "@emotion/styled";

export const HeaderChatWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 30px;
`;

export const HeaderInfo = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  gap: 0 10px;
  h5 {
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.color};
    margin-bottom: 4px;
  }
  p {
    color: #0abb87;
    font-size: 11px;
    font-style: italic;
  }
`;

export const HeaderAction = styled.div<ThemeProps>`
  display: flex;
  align-items: center;
  button {
    padding: 8px 14px;
    color: ${(props) => props.theme.color};
    border-color: ${(props) => props.theme.borderColor};
  }
`;
