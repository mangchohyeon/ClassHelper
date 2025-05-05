import { Slider as ChakraSlider, HStack } from "@chakra-ui/react";
import ComponentsProps from '@/types/ComponentsProps';
import React, { useState } from 'react'

interface SliderProps extends ComponentsProps {
    defaultValue : number;
    min? : number;
    max? : number;
    step? : number;
    width? : string;
    maxW? : string;
    size? : "sm" | "md" | "lg";
    variant? : "outline" | "solid";
    Label? : string | React.ReactNode;
    color? : string;
    ValueText? : boolean;
    onValueChange? : (v : number) => void;
}

function TempSlider(props : SliderProps) {
    const [value, setValue] = useState(props.defaultValue);

    function onVChange(val : number) {
        setValue(val);
        if(props.onValueChange) {
            props.onValueChange(val);
        }
        console.log("Slider에서 작성");
        console.log(`Slider Value : ${val}`);
    }
    
    return (
        <ChakraSlider.Root
        maxW={props.maxW}
        width={props.width}
        size={props.size}
        defaultValue={[value]}
        onValueChange={(e : any) => onVChange(e.value)}
        min={props.min}
        max={props.max}
        step={props.step}
        color={props.color}
        variant={props.variant}>
            <HStack justify="space-between">
                <ChakraSlider.Label>{props.Label}</ChakraSlider.Label>
                {props.ValueText != undefined
                ? <ChakraSlider.ValueText />
                : ""}
            </HStack>

            <ChakraSlider.Control>
                <ChakraSlider.Track>
                    <ChakraSlider.Range />
                </ChakraSlider.Track>
                <ChakraSlider.Thumbs />
            </ChakraSlider.Control>
        </ChakraSlider.Root>
    );
}

const Slider = React.memo(TempSlider);
export default Slider;
export {Slider, SliderProps};