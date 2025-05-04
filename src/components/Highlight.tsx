import { Highlight as HighLight} from "@ark-ui/react";
import ComponentsProps from "@/types/ComponentsProps";
import React from "react";

interface HighlightProps extends Omit<ComponentsProps, "width" | "height" | "onClick" | "children"> {
    query : string | string[];
    matchAll? : boolean;
    children? : string;
}

function TempHighlight(props : HighlightProps) {
    return (
        <HighLight
        className={props.className}
        id={props.id}
        style={props.style}
        query={props.query}
        text={props.children as string}
        matchAll={props.matchAll} />
    )
}

const Highlight = React.memo(TempHighlight);
export default Highlight;
export { Highlight, HighlightProps }