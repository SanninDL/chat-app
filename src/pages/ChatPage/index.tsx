import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { io } from "socket.io-client";

import { styled } from "@mui/material";
import { ACCESS_TOKEN_LOCAL_STORAGE_KEY } from "../../constant/common";

import { ChatContainer } from "../../containers/ChatContainer";
import { NavGroupContainer } from "../../containers/NavGroupContainer";
import { SidebarContainer } from "../../containers/SidebarContainer";

import { getLocalStorage } from "../../helpers/localStorage";
import { authAction } from "../../axios/authAction";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import { userAction } from "../../redux/userSlice";
import { chatAction } from "../../axios/chatAction";
import { fetchRooms } from "../../redux/chatSlice";
const ChatWrap = styled("div")`
  display: flex;
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => props.theme.custom.bgColor};
`;

export default function Chatpage() {
  const { logged, user } = useAppSelector((state) => state.user);

  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const loginWithAccessToken = async () => {
    console.log("login with access token");
    try {
      const accessToken = getLocalStorage(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
      if (logged) {
        return;
      }
      if (accessToken && !logged) {
        const res = await authAction.loginWithAccessToken({ accessToken });
        console.log("res ", res);
        if (res.isSuccess && res.data) {
          dispatch(userAction.setUser(res.data.user));
        }
      } else {
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async function () {
      try {
        await loginWithAccessToken();
      } catch (error) {
        console.log("error ", error);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      if (user.userId) {
        await dispatch(fetchRooms(user.userId));
      }
    })();
  }, [logged]);
  const env: string = process.env.REACT_APP_API_DOMAIN || "";
  console.log("env ", env);
  return (
    <ChatWrap>
      <NavGroupContainer />
      <SidebarContainer />
      <ChatContainer />
    </ChatWrap>
  );
}
