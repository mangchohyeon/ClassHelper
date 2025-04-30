import { Button, ButtonProps } from './Button';
import { Link, LinkProps } from './Link';
import ComponentsProps from '@/types/ComponentsProps';

interface ButtonLinkProps extends ComponentsProps {
    ButtonProps? : ButtonProps;
    LinkProps? : LinkProps;
}

export default function ButtonLink(props : ButtonLinkProps) {
    return (
        <Button
        size={props.ButtonProps?.size}
        variant={props.ButtonProps?.variant}
        color={props.ButtonProps?.color}
        rounded={props.ButtonProps?.rounded}
        className={props.className}
        id={props.id}
        onClick={() => props.onClick()}
        asChild>
            <Link 
            className={props.LinkProps?.className}
            id={props.LinkProps?.id}
            variant={props.LinkProps?.variant}
            color={props.LinkProps?.color}
            to={props.LinkProps?.to as string}
            target={props.LinkProps?.target}>
                {props.children}
            </Link>
        </Button>
    )
}