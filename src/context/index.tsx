import { createContext, ReactNode, useState } from "react";

interface ScreenProviderProps {
  children: ReactNode;
}
export interface IsFocusProps {
  isHomeFocus: boolean;
  isAboutFocus: boolean;
  isSkillsFocus: boolean;
  isQualificationsFocus: boolean;
  isProjectsFocus: boolean;
  isContactFocus: boolean;
}
interface ScreenContextDataProps {
  isFocus: IsFocusProps;
  setIsFocus: ({}: IsFocusProps) => void;
  windowWidth: number;
  windowHeight: number;
}

const initialValue = {
  isFocus: {
    isHomeFocus: true,
    isAboutFocus: false,
    isSkillsFocus: false,
    isQualificationsFocus: false,
    isProjectsFocus: false,
    isContactFocus: false,
  },
  setIsFocus: ({}: IsFocusProps) => {},
  windowWidth: 0,
  windowHeight: 0,
};

export const ScreenContext =
  createContext<ScreenContextDataProps>(initialValue);

export const ScreenContextProvider = ({ children }: ScreenProviderProps) => {
  var windowWidth = document.documentElement.clientWidth;
  var windowHeight = document.documentElement.clientHeight;
  const [isFocus, setIsFocus] = useState(initialValue.isFocus);
  return (
    <ScreenContext.Provider value={{ isFocus, setIsFocus, windowWidth, windowHeight}}>
      {children}
    </ScreenContext.Provider>
  );
};
