import { FileUpload } from "@chakra-ui/react";
import type { FileUploadFileAcceptDetails as FileAcceptDetails } from "@chakra-ui/react";
import { Button, ButtonProps } from './Button';
import React from "react";

interface FileUploadBtnProps extends ButtonProps {
    maxFiles? : number;
    maxFileSize? : number;
    minFileSize? : number;
    accept? : string| string[];
    onFileAccept? : (deatils : FileAcceptDetails) => void;
    onFileChange? : any;
    onFileReject? : any;
    size? : "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined;
    FileUploadLists? : boolean;
}

function TempFileUploadBtn(props: FileUploadBtnProps) {
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
      <FileUpload.Trigger asChild>
        <Button
        className={props.className}
        id={props.id}
        style={props.style}
        size={props.size}
        variant={props.variant}
        color={props.color}
        rounded={props.rounded}
        loading={props.loading}
        onClick={props.onClick}>
          {props.children}
        </Button>
      </FileUpload.Trigger>
      {props.FileUploadLists ? <FileUpload.List /> : null}
    </FileUpload.Root>
  );
}

const FileUploadBtn = React.memo(TempFileUploadBtn);
export default FileUploadBtn;
export {FileUploadBtn, FileUploadBtnProps, FileAcceptDetails };