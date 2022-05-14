import React from "react";
import { Title } from "./styled";

interface HeaderBarProps {
  title: string;
  control: JSX.Element;
}

export const HeaderBar = ({ title, control }: HeaderBarProps) => {
  return (
    <>
      <Title>{title}</Title>
      {control}
    </>
  );
};
