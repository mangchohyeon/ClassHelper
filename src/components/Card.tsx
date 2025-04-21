import { Card as ChakraCard } from '@chakra-ui/react';
import ComponentsProps from '@/types/ComponentsProps';

interface CardProps extends ComponentsProps {
    gap? : number;
    Img? : React.ReactNode;
    Title? : React.ReactNode;
    Description? : React.ReactNode;
    Footer? : React.ReactNode;
    variant? : "elevated" | "outline" | "subtle";
    size? : "sm" | "md" | "lg";
    Direction? : "column" | "row";
}

export default function Card(props : CardProps) {
    return (
        <ChakraCard.Root
        className={props.className}
        id={props.id}
        style={props.style}
        gap={props.gap}
        variant={props.variant}
        size={props.size}
        flexDirection={props.Direction || "column"}>
            <ChakraCard.Body>
                {props.Img ? props.Img : null}
                <ChakraCard.Title>
                    {props.Title}
                </ChakraCard.Title>

                <ChakraCard.Description>
                    {props.Description}
                </ChakraCard.Description>
            </ChakraCard.Body>

            <ChakraCard.Footer>
                {props.Footer}
            </ChakraCard.Footer>
        </ChakraCard.Root>
    )
}