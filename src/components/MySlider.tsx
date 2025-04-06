import { Slider, HStack } from "@chakra-ui/react";
import { ComponentsProps } from '@/types/ComponentsProps';
import { useState } from 'react'

interface MySliderProps extends ComponentsProps {
    defaultValue : number[];
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
    getValue? : (v : number) => void
}


function MySlider(props : MySliderProps) {
    const [value, setValue] = useState(props.defaultValue);

    function onVChange(val : number) {
        setValue([val]);
        if(props.getValue) {
            props.getValue(val);
        }
    }
    
    return (
        <Slider.Root
        maxW={props.maxW}
        width={props.width}
        size={props.size}
        defaultValue={value}
        onValueChange={(e : any) => onVChange(e.value)}
        min={props.min}
        max={props.max}
        step={props.step}
        colorPallete={props.color}
        variant={props.variant}
        >
            <HStack justify="space-between">
                <Slider.Label>{props.Label}</Slider.Label>
                {props.ValueText != undefined
                ? <Slider.ValueText />
                : ""}
            </HStack>

            <Slider.Control>
                <Slider.Track>
                    <Slider.Range />
                </Slider.Track>
                <Slider.Thumbs />
            </Slider.Control>
        </Slider.Root>


    );
    
}

export {MySlider};