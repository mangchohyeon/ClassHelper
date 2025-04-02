import { ComponentsProps } from "utils/ComponentsSettings";

export interface Menu {
  MainMenu : React.ReactNode;
  SubMenu : React.ReactNode[];
}

export interface NavigationProps extends ComponentsProps {
  Home : React.ReactNode;
  MenuLists : Menu[];
  LoginLists? : React.ReactNode[];
}