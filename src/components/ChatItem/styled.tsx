import { styled } from "@mui/material";

export const ChatItemWrap = styled("div")`
  display: flex;
  align-items: center;
  padding: 15px 30px 15px 40px;
  gap: 0 16px;
  position: relative;

  border-bottom: 1px solid ${(props) => props.theme.custom.borderColor};
`;

export const UnReadCount = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: #0a80ff;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  font-size: 11px;

  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
`;

export const Content = styled("div")`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h5 {
    font-size: 16px;
    color: ${(props) => props.theme.custom.color};
    margin-bottom: 5px;
  }
  p {
    color: ${(props) => props.theme.custom.textGray};
  }
`;
export const Action = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  p {
    color: ${(props) => props.theme.custom.textGray};
    font-size: 11px;
  }
`;
