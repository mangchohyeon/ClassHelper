import { Text as ChakraText } from "@chakra-ui/react";
import ComponentsProps from '@/types/ComponentsProps';

interface TextProps extends ComponentsProps {
    fontFamily? : string;
    fontSize? : string;
    fontWeight? : string;
    fontColor? : string;
}

export default function Text(props : TextProps) {
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

export { TextProps, Text }