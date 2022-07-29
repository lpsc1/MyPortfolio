import React from "react";
import { Button, A } from "./styles";
import {AiOutlineSend} from 'react-icons/ai'
import { HiArrowNarrowRight } from 'react-icons/hi'

interface ButtonBoxProps {
  title: string;
  icon: string;
  type: "button" | "reset" | "submit";
}

export function ButtonBox({ title, icon, type }: ButtonBoxProps) {
  return (
    <Button type={type}>
      <p style={{ marginRight: 7 }}>{title}</p>
      {icon === 'AiOutlineSend' ? 
      <AiOutlineSend className="icon"/> :
        <HiArrowNarrowRight className="icon"/>
      }
    </Button>
  );
}
