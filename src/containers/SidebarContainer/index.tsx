import React, { useMemo } from "react";
import { styled } from "@mui/material";
import { useGetAppState } from "../../redux/store";
import { ChatSidebarContainer } from "../ChatSidebarContainer";

export const SidebarWrap = styled("div")`
  width: 400px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const SidebarContainer = () => {
  const { tabActive } = useGetAppState();

  const renderTab = useMemo(() => {
    switch (tabActive) {
      case 0:
        return <ChatSidebarContainer />;

      default:
        return <ChatSidebarContainer />;
    }
  }, [tabActive]);
  return <SidebarWrap>{renderTab}</SidebarWrap>;
};
