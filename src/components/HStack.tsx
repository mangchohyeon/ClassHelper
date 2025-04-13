import { HStack as Hstack, StackProps } from "@chakra-ui/react"
import { ComponentsProps } from "@/types/ComponentsProps"


export function HStack(props : StackProps) {
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
