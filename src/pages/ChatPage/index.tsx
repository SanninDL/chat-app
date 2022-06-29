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
import { useGetUserState, useAppDispatch } from "../../redux/store";
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
  const { logged, user } = useGetUserState();

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const loginWithAccessToken = async () => {
    const accessToken = getLocalStorage(ACCESS_TOKEN_LOCAL_STORAGE_KEY);

    if (logged) {
      return;
    }

    if (accessToken && !logged) {
      const res = await authAction.loginWithAccessToken({ accessToken });

      if (res.isSuccess && res.data) {
        dispatch(userAction.setUser(res.data.user));
      }
    } else {
      navigate("/login");
    }
  };

  useEffect(() => {
    (async function () {
      try {
        await loginWithAccessToken();
      } catch (error) {
        navigate("/login");
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

  return (
    <ChatWrap>
      <NavGroupContainer />
      <SidebarContainer />
      <ChatContainer />
    </ChatWrap>
  );
}
