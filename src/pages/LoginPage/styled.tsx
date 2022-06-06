import { Button, styled } from "@mui/material";

export const AuthWrap = styled("div")`
  border: 1px solid #e6e6e6;
  position: relative;
  width: 450px;
  margin: 0 auto;
  margin-top: 60px;
  padding: 48px;
`;
export const Heading = styled("div")`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
  margin-bottom: 32px;
`;
export const LogoWrap = styled("div")`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 1;

  width: 100px;
  background-color: white;
  img {
    padding: 20px;
    width: 100%;
    object-fit: contain;
  }
`;
export const FormWrap = styled("div")`
  padding: 16px 0;
`;
export const Form = styled("form")`
  display: flex;
  flex-direction: column;
`;
export const SubmitBtn = styled(Button)`
  width: 100%;
  margin-top: 16px;
`;
export const AuthBottom = styled("div")`
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 32px;
  margin-top: 32px;
  p {
    text-align: center;
    color: #6c757d;
    margin-bottom: 16px;
  }
`;
