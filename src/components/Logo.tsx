import { ImgProps } from "@/types/ImgTypes";
import  logo  from "@assets/Logo.svg";
import React from "react";

interface LogoProps extends Omit<ImgProps, 'src'> {};

function TempLogo(props: LogoProps ) {
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
        src={logo}
        alt={props.alt} />
    )
};

const Logo = React.memo(TempLogo);
export default Logo;
export {Logo};