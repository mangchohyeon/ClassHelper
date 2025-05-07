import { ColorSwatch as ChakraColorSwatch } from "@chakra-ui/react";
import React from 'react';
import ComponentsProps from "@/types/ComponentsProps";

interface ColorSwatchProps extends ComponentsProps {
    value? : string;
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