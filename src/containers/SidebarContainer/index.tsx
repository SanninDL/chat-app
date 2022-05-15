import styled from "@emotion/styled";
import React, { useMemo } from "react";
import useChatContext from "../../hooks/useChatContext";
import { ChatSidebarContainer } from "../ChatSidebarContainer";

export const SidebarWrap = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;
export const SidebarContainer = () => {
  const { tabActive } = useChatContext();

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
