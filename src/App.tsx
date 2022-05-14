import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import ChatPage from "./pages/ChatPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ChatProvider from "./providers/ChatProvider";

export default function App() {
  return (
    <ChatProvider>
      <>
        <BrowserRouter>
          <Routes>
            <Route path='login' element={<LoginPage />} />
            <Route path='register' element={<RegisterPage />} />
            <Route path='' element={<ChatPage />} />
          </Routes>
        </BrowserRouter>
      </>
    </ChatProvider>
  );
}
