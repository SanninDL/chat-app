import { ThemeProvider } from "@mui/material";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { io } from "socket.io-client";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import { useAppSelector } from "./redux/store";
import { darkTheme, lightTheme } from "./styles/theme";

export default function App() {
  const { mode } = useAppSelector((state) => state.app);

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
