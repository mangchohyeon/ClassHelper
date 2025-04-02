import { JSX } from "react";
import styled from "styled-components";
import { ComponentsProps, ComponentsSettings } from 'utils/ComponentsSettings'

interface HBlockProps extends ComponentsProps {
    num?: 1 | 2 | 3 | 4 | 5 | 6 | undefined;  
    children?: React.ReactNode;
    onClick? : React.MouseEventHandler<Element>
}

function HBlock(props: HBlockProps) 
{    
    let Tag;
    props.num !== undefined
    ? Tag = `h${props.num}` as keyof JSX.IntrinsicElements
    : Tag = "div"

    const StyledHblock = styled(Tag)`
        display : block;
    `;

    return (        
        <StyledHblock {...ComponentsSettings({...props})}>            
            {props.children}
        </StyledHblock>
    );
}

export default HBlock;