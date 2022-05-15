import { Button } from "@mui/material";
import React from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { CustomTextField } from "../../helpers/globalStyles";
import {
  AuthBottom,
  AuthWrap,
  Form,
  FormWrap,
  Heading,
  LogoWrap,
  SubmitBtn
} from "../LoginPage/styled";

interface FormValues {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export default function LoginPage() {
  const { control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      userName: "",
      email: "",
      password: "",
      confirmPassword: ""
    }
  });

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <AuthWrap>
        <LogoWrap>
          <img src={logo} alt='Logo' />
        </LogoWrap>
        <Heading>Create account</Heading>
        <FormWrap>
          <Form onSubmit={handleSubmit(onSubmit)}>
            <Controller
              name='userName'
              control={control}
              render={({ field }) => (
                <CustomTextField
                  type='text'
                  {...field}
                  placeholder='User Name'
                />
              )}
            />
            <Controller
              name='email'
              control={control}
              render={({ field }) => (
                <CustomTextField type='email' {...field} placeholder='Email' />
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
              name='confirmPassword'
              control={control}
              render={({ field }) => (
                <CustomTextField
                  type='password'
                  {...field}
                  placeholder='Confirm Password'
                />
              )}
            />

            <SubmitBtn type='submit' variant='contained'>
              Register
            </SubmitBtn>
          </Form>
        </FormWrap>
        <AuthBottom>
          <p>Already have an account?</p>
          <Button variant='outlined' size='small'>
            <Link to='/login'>Sign In</Link>
          </Button>
        </AuthBottom>
      </AuthWrap>
    </div>
  );
}
