import { Button, FileUpload } from "@chakra-ui/react"
import { HiUpload } from "react-icons/hi"
import ComponentsProps from "@/types/ComponentsProps"
import { FileAcceptDetails } from "@chakra-ui/react/dist/types/components/file-upload/namespace";

interface FileUploadBtnProps extends ComponentsProps {
    maxFiles? : number;
    maxFileSize? : number;
    minFileSize? : number;
    accept? : string| string[];
    onFileAccept? : (details : FileAcceptDetails) => void;
    onFileChange? : (details : FileAcceptDetails) => void;
    onFileReject? : (details : FileAcceptDetails) => void;
    variant? : "outline" | "solid" | "subtle" | 
    "surface" | "ghost" | "plain" | undefined;
    size? : "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined;
    label? : string;
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
        <HiUpload /> {props.label}
        </Button>
    </FileUpload.Trigger>
    <FileUpload.List />
    </FileUpload.Root>
  )
}