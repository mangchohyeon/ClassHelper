import { Text as TextTemp, TextProps as TextPropsTemp } from "@chakra-ui/react";

interface TextProps extends TextPropsTemp {
    className? : string;
    id? : string;
    style? : React.CSSProperties;
    title? : string;
    fontFamily? : string;
    fontSize? : string;
    fontWeight? : string;
    fontColor? : string;
}

export default function Text(props : TextProps) {
    return (
        <text 
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
        </text>
    )
}