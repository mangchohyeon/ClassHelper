import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import React from "react";

interface ButtonProps extends Omit<ChakraButtonProps, "colorPalette" | "onClick"> {
  children?: React.ReactNode;
  color?: string;
  onClick?: any;
  ref?: React.RefObject<HTMLButtonElement | null>;
}

function Button({color, loading=false,  children, loadingText, ...rest} : ButtonProps) {
  return (
    <ChakraButton {...rest} color={color} loading={loading} loadingText={loadingText || ""}>
      {children}
    </ChakraButton>
  );
};

export { Button, ButtonProps };
export default React.memo(Button)