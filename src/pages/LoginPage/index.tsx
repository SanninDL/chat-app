import { Button, Checkbox, FormControlLabel } from "@mui/material";
import React, { useContext } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { authAction } from "../../axios/authAction";
import { chatContext } from "../../providers/ChatProvider";
import {
  AuthBottom,
  AuthWrap,
  CustomTextField,
  Form,
  FormWrap,
  Heading,
  LogoWrap,
  SubmitBtn
} from "./styled";

interface FormValues {
  email: string;
  password: string;
  remember: boolean;
}

export default function LoginPage() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: "",
      remember: false
    }
  });
  const navigation = useNavigate();
  const store = useContext(chatContext);

  const onSubmit: SubmitHandler<FormValues> = async (loginInfo) => {
    console.log("submit ", loginInfo);
    try {
      const res = await authAction.login(loginInfo);
      console.log("res ", res);
      console.log("store ", store);
      if (res.isSucces) {
        navigation("/");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <div>
      <AuthWrap>
        <LogoWrap>
          <img src={logo} alt='Logo' />
        </LogoWrap>
        <Heading>Sign In</Heading>
        <FormWrap>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <CustomTextField type='text' {...field} placeholder='Email' />
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <CustomTextField
                  type='password'
                  {...field}
                  placeholder='Password'
                />
              )}
            />

            <Controller
              name='remember'
              control={control}
              render={({ field }) => (
                <FormControlLabel
                  sx={{
                    "& .MuiCheckbox-root ": {
                      padding: "0 8px"
                    }
                  }}
                  {...field}
                  control={<Checkbox />}
                  label='Remember me'
                />
              )}
            />

            <SubmitBtn type='submit' variant='contained'>
              Sign In
            </SubmitBtn>
          </Form>
        </FormWrap>
        <AuthBottom>
          <p>Don't have an account?</p>
          <Button variant='outlined' size='small'>
            <Link to='/register'>Register now!</Link>
          </Button>
        </AuthBottom>
      </AuthWrap>
    </div>
  );
}
