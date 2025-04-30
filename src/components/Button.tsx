import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface ButtonProps extends Omit<ChakraButtonProps, "colorPalette" | "onClick"> {
  children?: React.ReactNode;
  color?: "gray" | "red" | "green" | "blue" | "teal" | "pink" | "purple" | "cyan" | "orange" | "yellow";
  onClick?: any;
  ref?: React.RefObject<HTMLButtonElement>;
}

export default function Button({color, loading=false,  children, loadingText, ...rest} : ButtonProps) {
  const [Loading, setLoading] = useState<boolean | undefined>(loading);

  useEffect(() => {
    loading == undefined ? setLoading(false) : setLoading(loading);
  })

  return (
    <ChakraButton {...rest} color={color} loading={Loading} loadingText={loadingText || ""}>
      {children}
    </ChakraButton>
  );
};

export { Button, ButtonProps };