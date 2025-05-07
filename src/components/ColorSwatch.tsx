import { ColorSwatch as ChakraColorSwatch } from "@chakra-ui/react";
import React from 'react';
import ComponentsProps from "@/types/ComponentsProps";

interface ColorSwatchProps extends ComponentsProps {
    value? : string;
    size? : "2xs" | "xs" | "sm" | "md" | "lg" | "xl" | "2xl"
}

function TempColorSwatch(props : ColorSwatchProps) {
    return (
        <ChakraColorSwatch value={props.value != undefined
            ? props.value 
            : "#000000"
        } />
    )
}

const ColorSwatch = React.memo(TempColorSwatch);
export default ColorSwatch;