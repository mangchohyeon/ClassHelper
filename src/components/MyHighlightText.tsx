import { Highlight, HighlightProps }from "./Highlight";

export default function HighlightText(props : Omit<HighlightProps, "query">) {
    return (
        <Highlight
        className={props.className}
        id={props.id}
        style={{
            ...props.style,
            color : "#38a5ff",
            backgroundColor : "#d1faff",
        }}
        query={props.children}>
            {props.children}
        </Highlight>
    )
}