import { default as TooltipTemp } from '@mui/material/Tooltip';
import { ComponentsProps } from '@/types/ComponentsProps';
import { Button } from '@mui/material';

interface TooltipProps extends ComponentsProps {
    title? : string;
    arrow? : boolean;
    position? : "top-start" | "top-end" | "top" |
    "bottom-start" | "bottom-end" | "bottom" |
    "right-start" | "right-end" | "right" |
    "left-start" | "left-end" | "left" ;
}

export function Tooltip(props : TooltipProps) {
    return (
      <TooltipTemp
      className={props.className}
      id={props.id}
      style={props.style}
      title={props.title}
      placement={props.position}
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