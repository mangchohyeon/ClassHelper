import styled from 'styled-components';
import { ComponentsProps } from '@/types/ComponentsProps';

interface TextSectionProps extends ComponentsProps {
    children: React.ReactNode;
}

const StyledSection = styled.section`
    text-align : left;
    height : auto;
    white-space : pre-line;
`;

function TextSection(props: TextSectionProps) {
    
    return (
        <StyledSection 
        className={props.className}
        id={props.id}
        style={props.style}>
            {props.children}
        </StyledSection>
    );
}

export default TextSection;