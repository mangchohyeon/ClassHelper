import { ImgProps } from "@/types/ImgTypes";

function QuestionCircleIcon(props: ImgProps) {
    const Style = {
        ...props.style,
        ...(props.width && { width: props.width }),
        ...(props.height && { height: props.height })
    };

    return (
        <img 
        className={props.className}
        id={props.id}
        style={Style}
        src={props.src}
        alt={props.alt} />
    )
}

export default QuestionCircleIcon;