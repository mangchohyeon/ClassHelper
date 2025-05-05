import { Highlight, HighlightProps }from "./Highlight";
import React from "react";

function TempHighlightText(props : Omit<HighlightProps, "query">) {
    return (
        <Highlight
        className={props.className}
        id={props.id}
        style={{
            ...props.style,
            color : "#38a5ff",
            backgroundColor : "#d1faff",
        }}
        query={props.children as string}>
            {props.children}
        </Highlight>
    )
}

const HighlightText = React.memo(TempHighlightText);
export default HighlightText;
export {HighlightText};