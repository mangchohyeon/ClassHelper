import type { ImgProps } from "@/types/ImgTypes";
import React from "react";

function TempImg(props: ImgProps ) {
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

const Img = React.memo(TempImg);
export default Img;
export {Img, ImgProps};