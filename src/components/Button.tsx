import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";

interface ButtonProps extends Omit<ChakraButtonProps, "colorPalette" | "onClick"> {
  children?: React.ReactNode;
  color?: "gray" | "red" | "green" | "blue" | "teal" | "pink" | "purple" | "cyan" | "orange" | "yellow";
  onClick?: any;
  ref?: React.RefObject<HTMLButtonElement>;
}

export default function Button(props : ButtonProps) {
  return (
    <ChakraButton
      size={props.size}
      variant={props.variant}
      colorPalette={props.color}
      rounded={props.rounded}
      className={props.className}
      id={props.id}
      onClick={() => props.onClick()}
      loading={props.loading}
      loadingText={props.loadingText || ""}
      ref={props.ref}>
      {props.children}
    </ChakraButton>
  );
};

export { Button, ButtonProps };