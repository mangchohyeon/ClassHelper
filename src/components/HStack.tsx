import { HStack as ChakraHStack } from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";
import React from "react";

function TempHStack(props : StackProps) {
  return (
    <ChakraHStack
    className={props.className}
    id={props.id}
    style={props.style}
    align={props.align}
    justify={props.justify}>
      {props.children}
    </ChakraHStack>
  )
}

const HStack = React.memo(TempHStack);
export default HStack;
export {HStack, StackProps as HStackProps};