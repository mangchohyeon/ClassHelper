import { Field as ChakraField } from "@chakra-ui/react"
import ComponentsProps from '@/types/ComponentsProps';
import { useState } from 'react';

interface FieldProps extends ComponentsProps {
    invalid? : boolean;
    HelperText? : React.ReactNode;
    ErrorText? : React.ReactNode;
    Label? : React.ReactNode;
    require? : boolean;
}

export default function Field({invalid=false, require=true, Label, 
  children, HelperText, ErrorText, ...rest} : FieldProps) {
    const isError = invalid;

    return (
    <ChakraField.Root invalid={invalid} required={require} {...rest}>
      <ChakraField.Label> {Label} {<ChakraField.RequiredIndicator />} </ChakraField.Label>
      {children}
      <ChakraField.HelperText> {HelperText} </ChakraField.HelperText>
      {isError ? <ChakraField.ErrorText> {ErrorText} </ChakraField.ErrorText> : null}
    </ChakraField.Root>
    )
};

export { FieldProps, Field };
