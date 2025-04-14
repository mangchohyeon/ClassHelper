import { ComponentsProps } from "./ComponentsProps"

export interface ImgProps extends ComponentsProps{
    src : string;
    alt? : string;
    width? : string;
    height? : string;
    objectFit? : string;
}