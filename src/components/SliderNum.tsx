import { Slider, useSlider } from "@chakra-ui/react";
import { ComponentsProps } from '@utils/ComponentsSettings';

interface SliderNumProps extends ComponentsProps {
    defaultValue? : number[];
    min? : number;
    max? : number;
    step? : number;
    width? : string;
    variant? : "outline" | "solid";
    Label? : string;
    color? : string;
    ValueText? : boolean;
}

function SliderNum(props : SliderNumProps) {
    const slider = useSlider({
        defaultValue: [40],
        thumbAlignment: "center",
      })
    

    return (
        <Slider.RootProvider width={props.width} 
        variant={props.variant}
        defaultValue={props.defaultValue}
        className={props.className}
        id={props.id}
        key={props.key}
        colorPallete={props.color}>
            <Slider.Label>
                {props.ValueText === true 
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
    )
}