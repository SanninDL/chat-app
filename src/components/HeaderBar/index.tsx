import React from "react";
import { ControlWrap, HeaderWrap, Title } from "./styled";

interface HeaderBarProps {
  title: string;
  control: JSX.Element;
}

export const HeaderBar = ({ title, control }: HeaderBarProps) => {
  return (
    <HeaderWrap>
      <Title>{title}</Title>
      <ControlWrap>{control}</ControlWrap>
    </HeaderWrap>
  );
};
