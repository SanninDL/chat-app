import React, { useEffect, useState } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { Button, Checkbox, FormControlLabel } from "@mui/material";
import {
  AuthBottom,
  AuthWrap,
  Form,
  FormWrap,
  Heading,
  LogoWrap,
  SubmitBtn
} from "./styled";
import { authAction } from "../../axios/authAction";
import {
  removeLocalStorage,
  setLocalStorageToken
} from "../../helpers/localStorage";
import { userAction } from "../../redux/userSlice";
import { CustomTextField, ErrorMessage } from "../../styles/globalStyles";
import {
  ACCESS_TOKEN_LOCAL_STORAGE_KEY,
  REFRESH_TOKEN_LOCAL_STORAGE_KEY
} from "../../constant/common";
import { useAppDispatch } from "../../redux/store";

export default function LoginPage() {
  const [error, setError] = useState<string>("");

  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const navigation = useNavigate();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<FormValues> = async (loginInfo) => {
    console.log("submit ", loginInfo);
    try {
      const res = await authAction.login(loginInfo);
      if (res.isSuccess && res.data) {
        const { user, accessToken, refreshToken } = res.data;

        dispatch(userAction.setUser(user));
        setLocalStorageToken(accessToken, ACCESS_TOKEN_LOCAL_STORAGE_KEY);
        setLocalStorageToken(refreshToken, REFRESH_TOKEN_LOCAL_STORAGE_KEY);

        navigation("/");
      }
      if (!res.isSuccess) {
        setError("Email or password are not correct");
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    removeLocalStorage(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
    removeLocalStorage(REFRESH_TOKEN_LOCAL_STORAGE_KEY);
    dispatch(userAction.removeUser());
  }, []);
  return (
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
              <CustomTextField
                sx={{
                  "& .MuiOutlinedInput-root input": {
                    color: "#495057!important"
                  }
                }}
                type='text'
                {...field}
                placeholder='Email'
              />
            )}
          />
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <CustomTextField
                sx={{
                  "& .MuiOutlinedInput-root input": {
                    color: "#495057!important"
                  }
                }}
                type='password'
                {...field}
                placeholder='Password'
              />
            )}
          />

          {error && <ErrorMessage>{error}</ErrorMessage>}

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
  );
}
