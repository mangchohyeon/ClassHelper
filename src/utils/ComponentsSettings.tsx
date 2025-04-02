export interface ComponentsProps {
    className?: string;
    id?: string;
    key?: string;
    style?: React.CSSProperties;
}

export function ComponentsSettings(props: ComponentsProps) {
    return {
        className: props.className !== undefined ? props.className : undefined,
        id: props.id !== undefined ? props.id : undefined,
        key: props.key !== undefined ? props.key : undefined,
        style: props.style !== undefined ? props.style : undefined, 
    };
}