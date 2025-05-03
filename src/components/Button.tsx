import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { useState, useEffect } from "react";

interface ButtonProps extends Omit<ChakraButtonProps, "colorPalette" | "onClick"> {
  children?: React.ReactNode;
  onClick?: any;
  ref?: React.RefObject<HTMLButtonElement>;
}

export default function Button({loading=false,  children, loadingText, ...rest} : ButtonProps) {
  const [Loading, setLoading] = useState<boolean | undefined>(loading);

  useEffect(() => {
    loading == undefined ? setLoading(false) : setLoading(loading);
  })

  return (
    <ChakraButton {...rest} loading={Loading} loadingText={loadingText || ""}>
      {children}
    </ChakraButton>
  );
};

export { Button, ButtonProps };