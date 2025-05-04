import { Input as ChakraInput, Field } from '@chakra-ui/react';
import ComponentsProps from '@/types/ComponentsProps';
import React from "react";

interface InputProps extends ComponentsProps {
    type? : string;
    placeholder? : string;
    variant? : "subtle" | "outline" | "flushed";
    size? : "xs" | "sm" | "md" | "lg";
    Label? : React.ReactNode;
    HelperText? : React.ReactNode;
}

function TempInput(props : InputProps) {
    const Type = props.type != undefined ? props.type : "text";

    return (
        <Field.Root required>
            {props.Label != undefined 
            ? <Field.Label>
                {props.Label} <Field.RequiredIndicator />
            </Field.Label>
            : null }
            <ChakraInput
            className={props.className}
            id={props.id}
            style={props.style}
            variant={props.variant}
            size={props.size}
            type={Type} />
            {props.HelperText != undefined
            ? <Field.HelperText>
                {props.HelperText}
            </Field.HelperText>
            : null}
        </Field.Root>
    )
}

const Input = React.memo(TempInput);
export default Input;
export {Input, InputProps};