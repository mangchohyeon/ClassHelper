import styled from 'styled-components';
import { ComponentsProps } from '@/types/ComponentsProps';

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
        <StyledInput 
        className={props.className}
        id={props.id}
        style={props.style} 
        type={Type}
        />
    )
}

export default Input