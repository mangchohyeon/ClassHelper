import { default as TooltipTemp } from '@mui/material/Tooltip';
import { ComponentsProps } from '@/types/ComponentsProps';

interface TooltipProps extends ComponentsProps {
    title? : string;
    arrow? : boolean;
    position? : "top-start" | "top-end" | "top" |
    "bottom-start" | "bottom-end" | "bottom" |
    "right-start" | "right-end" | "right" |
    "left-start" | "left-end" | "left" ;
}

export default function TooltipOffset(props : TooltipProps) {
    return (
      <TooltipTemp
      className={props.className}
      id={props.id}
      style={props.style}
      title={props.title}
        slotProps={{
            popper: {
            modifiers: [
                {
                    name: 'offset',
                    options: {
                        offset: [0, -14],
                    },
                },
            ],
        },
    }}
    >
        {props.children as React.ReactElement}
    </TooltipTemp>
    );
  }