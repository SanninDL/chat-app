import React from "react";
import useThemeContext from "../../hooks/useThemeContext";
import { ControlWrap, HeaderWrap, Title } from "./styled";

interface HeaderBarProps {
  title: string;
  control: JSX.Element;
}

export const HeaderBar = ({ title, control }: HeaderBarProps) => {
  const theme = useThemeContext();
  return (
    <HeaderWrap>
      <Title theme={theme}>{title}</Title>
      <ControlWrap theme={theme}>{control}</ControlWrap>
    </HeaderWrap>
  );
};
