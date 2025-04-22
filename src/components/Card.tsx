import { Card as ChakraCard, Box } from '@chakra-ui/react';
import ComponentsProps from '@/types/ComponentsProps';

interface CardProps extends ComponentsProps {
    gap? : number;
    Img? : React.ReactNode;
    Title? : React.ReactNode;
    Description? : React.ReactNode;
    Footer? : React.ReactNode;
    variant? : "elevated" | "outline" | "subtle";
    size? : "sm" | "md" | "lg";
    BodyProps? : ComponentsProps;
    TitleProps? : ComponentsProps;
    DescriptionProps? : ComponentsProps;
    FooterProps? : ComponentsProps;
}

export function Card(props : CardProps) {
    return (
        <ChakraCard.Root
        className={props.className}
        id={props.id}
        style={props.style}
        gap={props.gap}
        variant={props.variant}
        size={props.size}>
            <ChakraCard.Body className="ChakraCardBody">
                {props.Img ? props.Img : null}
                <ChakraCard.Title className="ChakraCardTitle">
                    {props.Title}
                </ChakraCard.Title>

                <ChakraCard.Description className="ChakraCardDescription">
                    {props.Description}
                </ChakraCard.Description>

                {props.children}
            </ChakraCard.Body>

            <ChakraCard.Footer className="ChakraCardFooter">
                {props.Footer}
            </ChakraCard.Footer>
        </ChakraCard.Root>
    )
}

interface HCardProps extends CardProps {
    BoxProps? : ComponentsProps;
}

export function HCard(props : HCardProps) {
    return (
        <ChakraCard.Root  
        className={props.className}
        id={props.id}
        style={props.style}
        flexDirection="row"
        gap={props.gap}
        variant={props.variant}
        size={props.size}>
            {props.Img && props.Img}

            <Box className={props.BoxProps?.className} 
            id={props.BoxProps?.id} style={props.BoxProps?.style}>
                <ChakraCard.Body >
                    <ChakraCard.Title className={props.TitleProps?.className}>
                        {props.Title}
                    </ChakraCard.Title>

                    <ChakraCard.Description className={props.DescriptionProps?.className}>
                        {props.Description}
                    </ChakraCard.Description>

                    {props.children && props.children}

                    <ChakraCard.Footer className={props.FooterProps?.className}>
                        {props.Footer}
                    </ChakraCard.Footer>
                </ChakraCard.Body>
            </Box>
        </ChakraCard.Root>   
    )
}