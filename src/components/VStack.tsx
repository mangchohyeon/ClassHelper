import { VStack as Vstack, StackProps } from "@chakra-ui/react";

export function VStack(props : StackProps) {
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
