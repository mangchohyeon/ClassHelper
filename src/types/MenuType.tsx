import { ComponentsProps } from "utils/ComponentsSettings";

interface Menu {
  MainMenu : React.ReactNode;
  SubMenu : React.ReactNode[];
}

interface NavigationProps extends ComponentsProps {
  Home : React.ReactNode;
  MenuLists : Menu[];
  LoginLists? : React.ReactNode[];
}

export { Menu, NavigationProps}