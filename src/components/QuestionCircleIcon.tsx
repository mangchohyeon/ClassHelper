import { ImgProps } from "@/types/ImgTypes";
import { QuestionIcon } from "@chakra-ui/icons";

interface QuestionIconProps extends Omit<ImgProps, 'src'> {

}

export function QuestionCircleIcon(props: QuestionIconProps ) {
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
        src={QuestionIcon}
        alt={props.alt} />
    )
}

