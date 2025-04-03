import { Slider, } from "@chakra-ui/react";
import { ComponentsProps } from '@utils/ComponentsSettings';
import { useState } from 'react'

interface MySliderProps extends ComponentsProps {
    defaultValue : number[];
    min? : number;
    max? : number;
    step? : number;
    width? : string;
    variant? : "outline" | "solid";
    Label? : string;
    color? : string;
    ValueText? : boolean;
    getValue? : (v : number) => void
}


function MySlider(props : MySliderProps) {
    const [value, setValue] = useState(props.defaultValue[0]);

    function onVChange(val : number) {
        setValue(val);
        if(props.getValue) {
            props.getValue(val);
        }
    }
    
    return (
        <Slider.RootProvider width={props.width} 
        variant={props.variant}
        defaultValue={props.defaultValue}
        step={props.step}
        colorPallete={props.color}
        onValueChange={(val : number) => (onVChange(val))}
        value={value}
        className={props.className}
        id={props.id}
        key={props.key}>
            <Slider.Label>
                {props.ValueText !== undefined 
                ? <Slider.ValueText />
                : <></>}
                <Slider.Control>
                    <Slider.Track>
                        <Slider.Range />
                    </Slider.Track>
                    <Slider.Thumbs />
                </Slider.Control>
            </Slider.Label>
        </Slider.RootProvider>
    );
    
}

export {MySlider};