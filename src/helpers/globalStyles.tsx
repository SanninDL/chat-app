import styled from "@emotion/styled";
import { TextField } from "@mui/material";

export const CustomTextField = styled(TextField)<ThemeProps>`
  width: 100%;
  margin-bottom: 24px;
  input {
    padding: 8px 12px;
    color: ${(props) => props.theme.color};
    font-family: "Inter", sans-serif;
    font-size: 14px;
  }
  fieldset {
    border-color: ${(props) => props.theme.borderColor};
  }
`;
