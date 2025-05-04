import { Field, Textarea as TextArea } from "@chakra-ui/react";
import ComponentsProps from '@/types/ComponentsProps';
import React from "react";

interface TextareaProps extends ComponentsProps {
    Label? : React.ReactNode;
    HelperText? : React.ReactNode;
    placeholder? : string;
    variant? : "outline" | "subtle" | "flushed";
    size? : "xs" | "sm" | "md" | "lg" | "xl";
    ref? : React.RefObject<any>;
}

function TempTextarea(props : TextareaProps) {
    return (
    <Field.Root required>
        {props.Label != undefined 
        ? <Field.Label>
        Comment <Field.RequiredIndicator />
    </Field.Label>
    : null}
        <TextArea 
        placeholder={props.placeholder}
        variant={props.variant}
        resize={"vertical"}
        ref={props.ref}
        />
        {props.HelperText != undefined
        ? <Field.HelperText>{props.HelperText}</Field.HelperText>
        : null}
    </Field.Root>  
      )
}

const Textarea = React.memo(TempTextarea);
export default Textarea;
export {Textarea, TextareaProps};