import { Stack as ChakraStack} from "@chakra-ui/react";
import ComponentsProps from '@/types/ComponentsProps';
import React from "react";

interface StackProps extends ComponentsProps {
    width? : string;
    height?: string;
    gap? : string;
    align? : string;
    children? : React.ReactNode;
}

function TempStack(props : StackProps) {
    return (
        <ChakraStack
        width={props.width}
        height={props.height}
        gap={props.gap}
        align={props.align}
        className={props.className}
        id={props.id}
        style={props.style}>
            {props.children}
        </ChakraStack>
    );
}

const Stack = React.memo(TempStack);
export default Stack;
export {Stack, StackProps};