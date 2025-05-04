import { Link as ChakraLink } from '@chakra-ui/react';
import ComponentsProps from '@/types/ComponentsProps';
import { LuExternalLink } from "react-icons/lu";
import React from "react";

interface LinkProps extends ComponentsProps {
    variant? : "underline" | "plain";
    color? : 'gray' | 'red' | 'orange' 
    | 'yellow' | 'green' | 'teal' | 'blue' 
    | 'cyan' | 'purple' | 'pink';
    to : string;
    target? : "_blank" | "_self" | "_parent" | "_top"; 
}

function TempLink(props : LinkProps) {
    return(
        <ChakraLink
        className={props.className}
        id={props.id}
        style={props.style}
        href={props.to}
        variant={props.variant}
        colorPalette={props.color}
        {...props.target && {target : props.target}}>
            {props.children}
        </ChakraLink>
    )
}

const Link = React.memo(TempLink);

function TempExternalLink(props : LinkProps) {
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

const ExternalLink = React.memo(TempExternalLink);

export default Link;
export {Link, ExternalLink, LinkProps};