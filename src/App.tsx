import { ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io, Socket } from "socket.io-client";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useGetUserState, useGetAppState, useAppDispatch } from "./redux/store";
import { userAction } from "./redux/userSlice";
import { darkTheme, lightTheme } from "./styles/theme";

export default function App() {
  const { mode } = useGetAppState();
  const { user, logged } = useGetUserState();
  const dispatch = useAppDispatch();

 

  return (
    <BrowserRouter>
      <ThemeProvider theme={mode === "dark" ? darkTheme : lightTheme}>
        <Routes>
          <Route path='login' element={<LoginPage />} />
          <Route path='register' element={<RegisterPage />} />
          <Route path='' element={<ChatPage />} />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  );
}
