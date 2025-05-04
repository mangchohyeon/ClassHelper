import ComponentsProps from "@/types/ComponentsProps";
import React from "react";

function TempRequireStar(props : ComponentsProps) {
    return (
        <div
        className={props.className}
        id={props.id}
        style={{
            ...props.style,
            color : "red",
            display : "inline-block",
            margin : "1px"
        }}>*</div>
    );
}

const RequireStar = React.memo(TempRequireStar);
export default RequireStar;