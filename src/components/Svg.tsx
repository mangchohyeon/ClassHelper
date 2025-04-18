import { ImgProps } from "@/types/ImgTypes";

export default function Svg(props: ImgProps ) {
    return (
        <img 
        className={props.className}
        id={props.id}
        style={props.style}
        src={props.src}
        alt={props.alt}
        onClick={() => props.onClick} />
    )
}

