import { HStack as Hstack } from "@chakra-ui/react"
import { ComponentsProps } from "@/types/ComponentsProps"

interface HStackProps extends ComponentsProps {
  
}

export function HStack(props : HStackProps) {
  return (
    <Hstack
    className={props.className}
    id={props.id}
    style={props.style}>
      {props.children}
    </Hstack>
  )
}
