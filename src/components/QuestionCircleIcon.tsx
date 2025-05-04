import { ImgProps } from "@/types/ImgTypes";
import QuestionIcon from '@assets/QuestionCircleIcon.svg';
import React from "react";

interface QuestionIconProps extends Omit<ImgProps, 'src'> {
}

function TempQuestionCircleIcon(props: QuestionIconProps ) {
    return (
        <img 
        className={props.className}
        id={props.id}
        style={props.style}
        src={QuestionIcon}
        alt={props.alt}
        />
    )
}

const QuestionCircleIcon = React.memo(TempQuestionCircleIcon);
export default QuestionCircleIcon;
export {QuestionCircleIcon, QuestionIconProps};