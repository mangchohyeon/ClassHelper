import { Dialog as ChakraDialog, useDialog, Portal, CloseButton } from '@chakra-ui/react';
import ComponentsProps from '@/types/ComponentsProps';
import React from 'react';

interface DialogProps extends ComponentsProps {
    Trigger? : React.ReactNode
    Header? : React.ReactNode;
    HeaderProps? : ComponentsProps;
    Title? : React.ReactNode;
    TitleProps? : ComponentsProps;
    Body? : React.ReactNode;
    BodyProps? : ComponentsProps;
    Footer? : React.ReactNode;
    FooterProps? : ComponentsProps;
    CloseBtnProps? : ComponentsProps;
}

export default function Dialog(props : DialogProps) {
    const OpenControl = useDialog();
    return (
        <ChakraDialog.RootProvider>
            <ChakraDialog.Trigger>
                {props.Trigger}
            </ChakraDialog.Trigger>

            <Portal>
                <ChakraDialog.Backdrop />
                <ChakraDialog.Positioner>
                    <ChakraDialog.Content>
                        <ChakraDialog.Header {...props.HeaderProps}>
                            <ChakraDialog.Title {...props.TitleProps}>
                                {props.Title}
                            </ChakraDialog.Title>
                        </ChakraDialog.Header>

                        <ChakraDialog.Body {...props.BodyProps}>
                            {props.Body}
                        </ChakraDialog.Body>

                        <ChakraDialog.Footer {...props.FooterProps}>
                            {props.Footer}
                        </ChakraDialog.Footer>

                        <ChakraDialog.CloseTrigger>
                            <CloseButton {...props.CloseBtnProps} />
                        </ChakraDialog.CloseTrigger>
                    </ChakraDialog.Content>
                </ChakraDialog.Positioner>
            </Portal>
        </ChakraDialog.RootProvider>
    )
}

