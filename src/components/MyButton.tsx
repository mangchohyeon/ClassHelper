import { Button, HStack } from "@chakra-ui/react";
import { ComponentsProps } from '@utils/ComponentsSettings';

interface MyButtonProps extends ComponentsProps {
  children? : React.ReactNode;
  size? : "xs" | "sm" | "md" | "lg" | "xl" | "2xl" | "2xs";
  variant? : "solid" | "subtle" | "surface" | "outline" | "ghost" | "plain";
  color? : "gray" | "red" | "green" | "blue" | "teal" | "pink" | "purple"
  | "cyan" | "orange" | "yellow";
  rounded? : "11" | "12" | "13" | "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  onClick? : any;
}

function MyButton(props : MyButtonProps) {
  return (
    <Button
      size={props.size}
      variant={props.variant}
      colorPalette={props.color}
      rounded={props.rounded}
      className={props.className}
      id={props.id}
      key={props.key}
      onClick={() => props.onClick()}
      >
      {props.children}
    </Button>

  )
}


export { MyButton, MyButtonProps }