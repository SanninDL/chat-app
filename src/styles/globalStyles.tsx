import { Button, styled, TextField } from "@mui/material";
import emotionStyled from "@emotion/styled";

export const CustomTextField = styled(TextField)`
  width: 100%;
  margin-bottom: 24px;
  input {
    padding: 8px 12px;
    color: ${(props) => props.theme.custom.color};
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }
  fieldset {
    border-color: ${(props) => props.theme.custom.borderColor};
  }
`;

export const FlexBox = emotionStyled.div<FlexBoxProps>`
  display: flex;
  align-items: ${(props) => props.alignItems || "center"};
  justify-content: ${(props) => props.justifyContent || "flex-start"};
  gap: ${(props) => props.gap || "0px"};
`;

export const CustomButton = styled(Button)`
  margin-left: 10px;
  padding: 8px 14px;
  min-width: unset;
  color: ${(props) => props.theme.custom.color};
  border: 1px solid;
  border-color: ${(props) => props.theme.custom.borderColor};

  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  svg {
    font-size: 17px;
  }
`;

export const CustomButtonPrimary = styled(CustomButton)`
  color: "#fff";
  background-color: #0a80ff;
  border-color: #0a80ff;
`;

export const ErrorMessage = styled("div")`
  color: red;
  font-size: 12px;
  margin-top: 16px;
`;
