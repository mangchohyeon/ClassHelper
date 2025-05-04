import { Text as ChakraText } from "@chakra-ui/react";
import ComponentsProps from '@/types/ComponentsProps';
import React from "react";

interface TextProps extends ComponentsProps {
    fontFamily? : string;
    fontSize? : string;
    fontWeight? : string;
    fontColor? : string;
}

function TempText(props : TextProps) {
    return (
        <ChakraText 
        className={props.className}
        id={props.id}
        style={{
            ...props.style,
            fontFamily : props.fontFamily,
            fontSize : props.fontSize,
            fontWeight : props.fontWeight,
            color : props.fontColor,
        }}
        >
            {props.children}
        </ChakraText>
    )
}

const Text  = React.memo(TempText);
export default Text;
export { TextProps, Text }