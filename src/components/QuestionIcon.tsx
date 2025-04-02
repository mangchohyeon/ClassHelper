import QuestionCircleSvg from 'assets/QuestionCirclelcon.svg'
import { ComponentsProps } from 'utils/ComponentsSettings'

interface QuestionIconProps extends ComponentsProps {
    width?: string;
    height?: string;
}

export function QuestionIcon(props : QuestionIconProps) {
    return (
        <QuestionCircleSvg 
            style={{ width : props.width, height : props.height }}
            {...props}
        />
    )
}
