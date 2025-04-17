import { Link as ChakraLink } from '@chakra-ui/react';
import { ComponentsProps } from '@/types/ComponentsProps';
import { LuExternalLink } from "react-icons/lu"

interface LinkProps extends ComponentsProps {
    variant? : "underline" | "plain";
    color? : 'gray' | 'red' | 'orange' 
    | 'yellow' | 'green' | 'teal' | 'blue' 
    | 'cyan' | 'purple' | 'pink';
    to : string;
}

export function Link(props : LinkProps) {
    return(
        <ChakraLink
        className={props.className}
        id={props.id}
        style={props.style}
        href={props.to}
        variant={props.variant}
        colorPalette={props.color}>
            {props.children}
        </ChakraLink>
    )
}

export function ExternalLink(props : LinkProps) {
    return(
        <ChakraLink
        className={props.className}
        id={props.id}
        style={props.style}
        href={props.to}
        variant={props.variant}
        colorPalette={props.color}>
            {props.children}{<LuExternalLink />}
        </ChakraLink>
    )
}
