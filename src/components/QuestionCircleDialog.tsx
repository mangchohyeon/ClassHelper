import { Dialog, DialogProps } from './Dialog';
import Button from './Button';
import ComponentsProps from '@/types/ComponentsProps';
import QuestionCircleIcon from '@components/QuestionCircleIcon';
import React from 'react';

interface QuestionCircleDialogProps extends Omit<DialogProps, "Trigger"> {
    ButtonProps? : ComponentsProps;
    QuestionCircleIconProps? : ComponentsProps;
}

function TempDialog({ButtonProps, 
    QuestionCircleIconProps, ...rest} : QuestionCircleDialogProps) {
    const QuestionIconBtn = <Button {...ButtonProps}>
        <QuestionCircleIcon {...QuestionCircleIconProps} />
    </Button>;

    return (
        <Dialog {...rest} Trigger={QuestionIconBtn} />
    );
};

const QuestionCircleDialog = React.memo(TempDialog);
export default QuestionCircleDialog;
export {QuestionCircleDialog, QuestionCircleDialogProps};