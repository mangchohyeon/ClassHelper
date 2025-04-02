declare module '*.module.css' {
    const content: { [key: string]: string };
    export = content;
}

declare module "*.svg" {
    import React from "react";
    export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    const src: string;
    export default src;
}