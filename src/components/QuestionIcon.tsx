import { ComponentsProps } from '@utils/ComponentsSettings';
import QuestionCircleSvg  from '@assets/QuestionCirclelcon.svg?react';
import styled from 'styled-components';

interface QuestionIconProps extends ComponentsProps {
    width?: string;
    height?: string;
}

const QuestionIconTemp1 = styled(QuestionCircleSvg)<QuestionIconProps>`
width : ${(props) => props.width};
height : ${(props) => props.height};
`

function QuestionIcon(props : QuestionIconProps) {
    return (
        <QuestionCircleSvg
        className={props.className}
        id={props.id}
        width={props.width}
        height={props.height} />
    )
}

export { QuestionIcon }