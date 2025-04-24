import { FileUpload } from "@chakra-ui/react";
import { Button, ButtonProps } from './Button';

interface FileUploadBtnProps extends ButtonProps {
    maxFiles? : number;
    maxFileSize? : number;
    minFileSize? : number;
    accept? : string| string[];
    onFileAccept? : any;
    onFileChange? : any;
    onFileReject? : any;
    size? : "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined;
}

export default function FileUploadBtn(props : FileUploadBtnProps) {
    return (
    <FileUpload.Root 
    maxFiles={props.maxFiles}
    maxFileSize={props.maxFileSize}
    minFileSize={props.minFileSize}
    accept={props.accept}
    onFileAccept={props.onFileAccept}
    onFileChange={props.onFileChange}
    onFileReject={props.onFileReject}>
    <FileUpload.HiddenInput />
    <FileUpload.Trigger>
        <Button 
        className={props.className}
        id={props.id}
        style={props.style}
        variant={props.variant}
        size={props.size}
        onClick={() => props.onClick}
        color={props.color}
        rounded={props.rounded}
        loading={props.loading}>
        {props.children}
        </Button>
    </FileUpload.Trigger>
    <FileUpload.List />
    </FileUpload.Root>
  )
}