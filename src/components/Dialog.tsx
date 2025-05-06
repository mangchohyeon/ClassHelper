import { Dialog as ChakraDialog, Portal, CloseButton, 
    DialogOpenChangeDetails as DialogOpenChangeEvent } 
from '@chakra-ui/react';
import ComponentsProps from '@/types/ComponentsProps';
import React, { useState } from 'react';
import Text from './Text';
import Button from './Button';

interface DialogProps extends Omit<ComponentsProps, "children"> {
    Trigger? : React.ReactNode;
    Header? : React.ReactNode;
    HeaderProps? : ComponentsProps;
    Title? : React.ReactNode;
    TitleProps? : ComponentsProps;
    Body? : React.ReactNode;
    BodyProps? : ComponentsProps;
    Footer? : React.ReactNode;
    FooterProps? : ComponentsProps;
    CloseBtnProps? : ComponentsProps;
    onOpenChange? : (e : DialogOpenChangeEvent) => void;
}

function dialog({Trigger, Header, HeaderProps,
    Title, TitleProps, Body, BodyProps, Footer, FooterProps, 
    CloseBtnProps, onOpenChange } : DialogProps) {
    const [isOpen, setIsOpen] = useState(false);
    
    function handleOpenChange(e : DialogOpenChangeEvent) {
        setIsOpen(e.open);
        onOpenChange 
        ? onOpenChange(e)
        : null;
    }

    return (
        <ChakraDialog.Root open={isOpen} 
        onOpenChange={(e : DialogOpenChangeEvent) => handleOpenChange(e)}>
            <ChakraDialog.Trigger asChild>
                {Trigger}
            </ChakraDialog.Trigger>

            <Portal>
                <ChakraDialog.Backdrop />
                <ChakraDialog.Positioner>
                    <ChakraDialog.Content>
                        <ChakraDialog.Header {...HeaderProps}>
                            <ChakraDialog.Title {...TitleProps}>
                                {Title}
                            </ChakraDialog.Title>
                        </ChakraDialog.Header>

                        <ChakraDialog.Body {...BodyProps}>
                            {Body}
                        </ChakraDialog.Body>

                        <ChakraDialog.Footer {...FooterProps}>
                            {Footer}
                        </ChakraDialog.Footer>

                        <ChakraDialog.CloseTrigger>
                            <CloseButton {...CloseBtnProps} />
                        </ChakraDialog.CloseTrigger>
                    </ChakraDialog.Content>
                </ChakraDialog.Positioner>
            </Portal>
        </ChakraDialog.Root>
    )
}

const Dialog = React.memo(dialog);
export default Dialog;

interface SequentDialogProps extends Omit<DialogProps, "Header" | "HeaderProps" | 
"Title" | "TitleProps" | "Body" | "BodyProps" | "Footer" | "FooterProps"> {
    HeaderList? : React.ReactNode[];
    TitleList? : React.ReactNode[];
    BodyList? : React.ReactNode[];
    FooterList? : React.ReactNode[];
    PrevBtn? : React.ReactNode;
    PrevBtnProps? : ComponentsProps;
    NextBtn? : React.ReactNode;
    NextBtnProps? : ComponentsProps;
}

function sequentDialog({HeaderList, TitleList, BodyList, FooterList, 
    PrevBtnProps,NextBtnProps,
PrevBtn=<Text style={{color : "white", fontFamily : "inherit"}}>이전</Text>,
NextBtn=<Text style={{color : "white", fontFamily : "inherit"}}>다음</Text>,
onOpenChange, Trigger, CloseBtnProps} : SequentDialogProps) {
    const [step, setStep] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    function handleOpenChange(e : DialogOpenChangeEvent) {
        setIsOpen(e.open);
        onOpenChange ? onOpenChange(e) : null;
    }

    function handlePrevBtnClick() {
        if(step == 0) {
            setIsOpen((isOpen) => false);
            setStep((step) => 0);
            return ;
        }
        setStep((step) => step-1);
    }

    function handleNextBtnClick() {
        if(step == HeaderList?.length) {
            setIsOpen((isOpen) => false);
            setStep((step) => 0);
        }
        setStep((step) => step+1);
    }

    return (
        <ChakraDialog.Root open={isOpen} 
        onOpenChange={(e : DialogOpenChangeEvent) => handleOpenChange(e)}>
            <ChakraDialog.Trigger asChild>
                {Trigger}
            </ChakraDialog.Trigger>

            <Portal>
                <ChakraDialog.Backdrop />
                <ChakraDialog.Positioner>
                    <ChakraDialog.Content>
                        <ChakraDialog.Header>
                            <ChakraDialog.Title>
                                {TitleList ? TitleList[step] : null}
                            </ChakraDialog.Title>
                            {HeaderList ? HeaderList[step] : null}
                        </ChakraDialog.Header>

                        <ChakraDialog.Body>
                            {BodyList ? BodyList[step] : null}
                        </ChakraDialog.Body>

                        <ChakraDialog.Footer>
                            <ChakraDialog.ActionTrigger asChild>
                                <Button 
                                {...PrevBtnProps}
                                onClick={handlePrevBtnClick}>
                                    {PrevBtn}
                                </Button>
                            </ChakraDialog.ActionTrigger>

                            <ChakraDialog.ActionTrigger asChild>
                                <Button
                                {...NextBtnProps}
                                onClick={handleNextBtnClick}>
                                    {NextBtn}
                                </Button>
                            </ChakraDialog.ActionTrigger>
                            {FooterList ? FooterList[step] : null}
                        </ChakraDialog.Footer>

                        <ChakraDialog.CloseTrigger>
                            <CloseButton {...CloseBtnProps} />
                        </ChakraDialog.CloseTrigger>
                    </ChakraDialog.Content>
                </ChakraDialog.Positioner>
            </Portal>
        </ChakraDialog.Root>
    )
}

const SequentDialog = React.memo(sequentDialog);
export {Dialog, SequentDialog, DialogProps, SequentDialogProps, DialogOpenChangeEvent};