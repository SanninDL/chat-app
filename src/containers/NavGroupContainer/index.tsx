import React from "react";
import { useNavigate } from "react-router-dom";
import { NavGroup } from "../../components/NavGroup";
import {
  ACCESS_TOKEN_LOCAL_STORAGE_KEY,
  REFRESH_TOKEN_LOCAL_STORAGE_KEY
} from "../../constant/common";
import { removeLocalStorage } from "../../helpers/localStorage";
import { useAppDispatch } from "../../redux/store";
import { userAction } from "../../redux/userSlice";

export const NavGroupContainer = () => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const handleLogOut = () => {
    dispatch(userAction.removeUser());
    removeLocalStorage(ACCESS_TOKEN_LOCAL_STORAGE_KEY);
    removeLocalStorage(REFRESH_TOKEN_LOCAL_STORAGE_KEY);
    navigate("/login");
  };

  return <NavGroup handleLogOut={handleLogOut} />;
};
