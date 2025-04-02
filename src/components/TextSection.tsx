import styled from 'styled-components'
import { ComponentsProps, ComponentsSettings } from 'utils/ComponentsSettings'

interface TextSectionProps extends ComponentsProps {
    children: React.ReactNode;
}

const StyledSection = styled.section`
    text-align : left;
    height : auto;
    white-space : pre-line;
`;

function TextSection(props: TextSectionProps) {
    const componentProps = ComponentsSettings(props);
    
    return (
        <StyledSection {...componentProps}>
            {props.children}
        </StyledSection>
    );
}

export default TextSection;