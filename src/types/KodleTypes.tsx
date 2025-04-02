export interface LetterProps {
    className? : any;
    id? : any;
    children : React.ReactElement;
}

export interface LetterLineProps {
    LineNum: number;
    word : string;
    className?: any;
    id?: any;
}

export interface LetterLinesProps {
    LineNum: number;
    word : string;
    id?: any;
}