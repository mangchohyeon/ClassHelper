import { ImgProps } from "@/types/ImgTypes";
import QuestionIcon from '@assets/QuestionCircleIcon.svg';
interface QuestionIconProps extends Omit<ImgProps, 'src'> {
}

export function QuestionCircleIcon(props: QuestionIconProps ) {
    return (
        <img 
        className={props.className}
        id={props.id}
        style={props.style}
        title={props.title}
        src={QuestionIcon}
        alt={props.alt}
        />
    )
}

