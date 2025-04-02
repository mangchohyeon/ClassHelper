import styled from 'styled-components';
import { ComponentsProps, ComponentsSettings } from 'utils/ComponentsSettings'

interface InputProps extends ComponentsProps {
    type? : string;
    placeholder? : string;
}

function Input(props : InputProps) {
    const Type = props.type !== undefined ? props.type : "text";
    const StyledInput = styled.input`
    border : 1px solid black;
    border-radius : 10%;
    placeholder : ${props.placeholder}
    `;

    return (
        <StyledInput {...ComponentsSettings({...props})} type={Type} />
    )
}

export default Input