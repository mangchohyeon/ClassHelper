import { Button as ButtonTemp } from "@chakra-ui/react";
import ComponentsProps from '@/types/ComponentsProps';

interface ButtonProps extends ComponentsProps {
  children? : React.ReactNode;
  size? : "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "2xs";
  variant? : "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  color? : "gray" | "red" | "green" | "blue" | "teal" | "pink" | "purple"
  | "cyan" | "orange" | "yellow";
  rounded? : "11" | "12" | "13" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  onClick? : any;
}

function Button(props : ButtonProps) {
  return (
    <ButtonTemp
      size={props.size}
      variant={props.variant}
      colorPalette={props.color}
      rounded={props.rounded}
      className={props.className}
      id={props.id}
      onClick={() => props.onClick()}
      >
      {props.children}
    </ButtonTemp>

  )
}

export { Button, ButtonProps}