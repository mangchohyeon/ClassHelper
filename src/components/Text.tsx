import { Text as TextTemp, TextProps as TextPropsTemp } from "@chakra-ui/react";

interface TextProps extends TextPropsTemp {
    className? : string;
    id? : string;
    style? : React.CSSProperties;
    title? : string;
}

export function Text(props : TextProps) {
    return (
        <text 
        className={props.className}
        id={props.id}
        style={props.style}
        >
            {props.children}
        </text>
    )
}