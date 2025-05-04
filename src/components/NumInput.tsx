import { NumberInput as ChakraNumInput, NumberInputValueChangeDetails } from '@chakra-ui/react';
import ComponentsProps from '@/types/ComponentsProps';
import React, { useState, useEffect } from 'react';

interface NumInputProps extends ComponentsProps {
    max? : number;
    min? : number;
    step? : number;
    color? : 'gray' | 'red' | 'orange' | 'yellow' | 'green' | 'teal' | 'blue' | 'cyan' 
    | 'purple' | 'pink';
    size? : 'xs' | 'sm' | 'md' | 'lg';
    variant? : 'outline' | 'subtle' | 'flushed';
    defaultValue? : number;
    disabled? : boolean;
    invaild? : boolean;
    name? : string;
    onValueChange? : any;
    onFocusChange? : any;
    required? : boolean;
    readOnly? : boolean;
    ref? : React.RefObject<HTMLInputElement | null>;
    InputProps? : ComponentsProps;
    ControlProps? : ComponentsProps;
};

function TempNumInput({defaultValue, readOnly=false, required=false,
    disabled=false, invaild: invalid=false, min=-1*Infinity, max=Infinity,
    onValueChange, InputProps, ControlProps, ref, 
    ...rest} : NumInputProps) {
        const [Value, setValue] = useState<number>(1);

        function handleValueChange(v: number) {
            if(v >= min && v <= max) {
                setValue(v);
            }
            else {
                setValue(defaultValue || 1);
            }
        }

        //초기값 설정
        useEffect(() => {
            setValue(defaultValue || 1);
        },[]);

        useEffect(() => {
            
        })

        return (
        <ChakraNumInput.Root
        required={required}
        readOnly={readOnly}
        disabled={disabled}
        invalid={invalid}
        min={min}
        max={typeof(max) != undefined ? max : undefined}
        value={Value.toString()}
        onValueChange={(details : NumberInputValueChangeDetails) => {
            handleValueChange(details.valueAsNumber);
            onValueChange(details);
          }}
        
        clampValueOnBlur={false}
        {...rest}>
            <ChakraNumInput.Control {...ControlProps}/>
            <ChakraNumInput.Input 
            {...InputProps}
            ref={ref}/>
        </ChakraNumInput.Root>
    )
}

const NumInput = React.memo(TempNumInput);
export default NumInput;
export { NumInputProps, NumInput }; 