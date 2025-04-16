import { Card as CardTemp } from '@chakra-ui/react';
import { ComponentsProps } from '@/types/ComponentsProps';

interface CardProps extends ComponentsProps {
    gap? : number;
    Title? : React.ReactNode;
    Description? : React.ReactNode;
    Body? : React.ReactNode;
    Footer? : React.ReactNode;
    variant? : "elevated" | "outline" | "subtle";
    size? : "sm" | "md" | "lg";
}

export function Card(props : CardProps) {
    return (
        <CardTemp.Root
        className={props.className}
        id={props.id}
        style={props.style}
        gap={props.gap}
        variant={props.variant}
        size={props.size}>
            <CardTemp.Body>
                {props.Body}
                <CardTemp.Title>
                    {props.Title}
                </CardTemp.Title>

                <CardTemp.Description>
                    {props.Description}
                </CardTemp.Description>
            </CardTemp.Body>

            <CardTemp.Footer>
                {props.Footer}
            </CardTemp.Footer>
        </CardTemp.Root>
    )
}