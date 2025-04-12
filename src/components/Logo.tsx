import { ImgProps } from "@/types/ImgTypes";
import  logo  from "@assets/Logo.svg";

interface LogoProps extends Omit<ImgProps, 'src'> {

}

function Logo(props: LogoProps ) {
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
}

export { Logo };