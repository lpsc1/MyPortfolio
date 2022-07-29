import React from "react";
import { Button, A } from "./styles";

interface ButtonBoxProps {
  title: string;
  icon: string;
  type: "button" | "reset" | "submit";
}

export function ButtonBox({ title, icon, type }: ButtonBoxProps) {
  return (
    <Button type={type}>
      <p style={{ marginRight: 7 }}>{title}</p>
      <img src={icon}></img>
    </Button>
  );
}
