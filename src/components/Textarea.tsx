import { Field, Textarea as TextArea } from "@chakra-ui/react";
import ComponentsProps from '@/types/ComponentsProps';

interface TextareaProps extends ComponentsProps {
    Label? : React.ReactNode;
    HelperText? : React.ReactNode;
    placeholder? : string;
    variant? : "outline" | "subtle" | "flushed";
    size? : "xs" | "sm" | "md" | "lg" | "xl";
    ref? : React.RefObject<any>;
}

export default function Textarea(props : TextareaProps) {
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

