import { HStack as Hstack, StackProps } from "@chakra-ui/react";

export default function HStack(props : StackProps) {
  return (
    <Hstack
    className={props.className}
    id={props.id}
    style={props.style}
    align={props.align}
    justify={props.justify}>
      {props.children}
    </Hstack>
  )
}
