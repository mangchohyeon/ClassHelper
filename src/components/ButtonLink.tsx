import { Button, ButtonProps } from './Button';

export default function ButtonLink(props : ButtonProps) {
    return (
        <Button
        size={props.size}
        variant={props.variant}
        color={props.color}
        rounded={props.rounded}
        className={props.className}
        id={props.id}
        onClick={() => props.onClick()}>
            {props.children}
        </Button>
    )
}