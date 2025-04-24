import { Button, FileUpload } from "@chakra-ui/react";
import ComponentsProps from "@/types/ComponentsProps";
import Svg from './Svg';
import UploadIcon from '@assets/UploadIcon.svg';

interface FileUploadBtnProps extends ComponentsProps {
    maxFiles? : number;
    maxFileSize? : number;
    minFileSize? : number;
    accept? : string| string[];
    onFileAccept? : any;
    onFileChange? : any;
    onFileReject? : any;
    variant? : "outline" | "solid" | "subtle" | 
    "surface" | "ghost" | "plain" | undefined;
    size? : "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined;
    UploadIconProps? : ComponentsProps;
}

export default function FileUploadBtn(props : FileUploadBtnProps) {
    const Variant = props.variant != undefined
    ? props.variant
    : "outline";

    const Size = props.size != undefined 
    ? props.size
    : "md";

    return (
    <FileUpload.Root 
    maxFiles={props.maxFiles}
    maxFileSize={props.maxFileSize}
    minFileSize={props.minFileSize}
    accept={props.accept}>
    <FileUpload.HiddenInput 
    onFileAccept={props.onFileAccept}
    onFileChange={props.onFileChange}
    onFileReject={props.onFileReject}
    />
    <FileUpload.Trigger>
        <Button 
        className={props.className}
        id={props.id}
        style={props.style}
        variant={Variant}
        size={Size}
        onClick={() => props.onClick}
        >
        <Svg
        {...props.UploadIconProps}
        src={UploadIcon}
        alt="파일 업로드 아이콘" /> 
        {props.children}
        </Button>
    </FileUpload.Trigger>
    <FileUpload.List />
    </FileUpload.Root>
  )
}