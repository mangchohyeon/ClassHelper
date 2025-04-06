import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ComponentsProps } from '@/types/ComponentsProps';
import React from 'react';

const StyledLink = styled(Link)`
    text-decoration: none;
    color: inherit;
    
    &:hover {
        text-decoration: none;
        color: inherit;
    }
    &:visited {
        text-decoration: none;
        color: inherit;
    }
    &:active {
        text-decoration: none;
        color: inherit;
    }
`;

interface DivLinkProps extends ComponentsProps {
    children : React.ReactNode;
    to : string;
    onClick? : React.MouseEventHandler<Element>
}

function DivLink(props : DivLinkProps) {
    
    return (
        <StyledLink 
        className={props.className}
        id={props.id}
        style={props.style}
        to={props.to}
        onClick={props.onClick}>
            {props.children}
        </StyledLink>
    );
}

export default DivLink

