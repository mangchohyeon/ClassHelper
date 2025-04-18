import { Highlight as HighLight} from "@ark-ui/react";
import ComponentsProps from "@/types/ComponentsProps";

interface HighlightProps extends Omit<ComponentsProps, "width" | "height" | "onClick" | "children"> {
    query : string | string[];
    matchAll? : boolean;
    children : string;
}

export default function Highlight(props : HighlightProps) {
    return (
        <HighLight
        className={props.className}
        id={props.id}
        query={props.query}
        text={props.children}
        matchAll={props.matchAll} />
    )
}