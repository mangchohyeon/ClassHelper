import ComponentsProps from "@/types/ComponentsProps";


export default function RequireStar(props : ComponentsProps) {
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