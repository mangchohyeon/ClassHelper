import { VStack as Vstack } from "@chakra-ui/react";
import type { StackProps } from "@chakra-ui/react";
import React from 'react';

function TempVStack(props : StackProps) {
  return (
    <Vstack
    className={props.className}
    id={props.id}
    style={props.style}
    align={props.align}
    justify={props.justify}>
      {props.children}
    </Vstack>
  )
}

const VStack = React.memo(TempVStack);
export default VStack;
export {VStack, StackProps};