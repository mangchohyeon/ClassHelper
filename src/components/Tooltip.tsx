import { Tooltip as tooltip } from "@ark-ui/react";
import styles from './Tooltip.module.css';

interface TooltipProps {
    children? : React.ReactNode;
    content? : string;
    arrow? : boolean;
    openDelay? : number;
    closeDelay? : number;
    placement? : "top" | "top-start" | "top-end" |
    "bottom" | "bottom-start" | "bottom-end" |
    "right" | "right-start" | "right-end" |
    "left" | "left-start" | "left-end";
}

export function Tooltip(props : TooltipProps) {
    return (
    <tooltip.Root 
    openDelay={props.openDelay ? props.openDelay: 0}
    closeDelay={props.closeDelay ? props.openDelay : 0}>
        <tooltip.Trigger
        className={styles.Trigger}>{props.children}</tooltip.Trigger>
        <tooltip.Positioner>
            {props.arrow
            ?<tooltip.Arrow>
                <tooltip.ArrowTip />
            </tooltip.Arrow>
            : <></>}
            <tooltip.Content>{props.content}</tooltip.Content>
            </tooltip.Positioner>
    </tooltip.Root>
    )
  
}
