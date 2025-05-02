import { Button, ButtonProps } from './Button';
import { FileUpload } from '@chakra-ui/react';
import type { FileUploadFileAcceptDetails as FileAcceptDetails,
  FileUploadFileChangeDetails as FileChangeDetails,
  FileUploadFileRejectDetails as FileRejectDetails
} from "@chakra-ui/react";

interface FileUploadBtnProps extends ButtonProps {
    maxFiles? : number;
    maxFileSize? : number;
    minFileSize? : number;
    accept? : string| string[];
    onFileAccept? : (details : FileAcceptDetails) => void;
    onFileChange? : (details : FileChangeDetails) => void;
    onFileReject? : (detilas : FileRejectDetails) => void;
    size? : "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined;
    FileUploadLists? : boolean;
}

export default function FileUploadBtn({ maxFiles, maxFileSize, minFileSize = 0,
  accept, onFileAccept, onFileChange, onFileReject, 
  children, FileUploadLists, ...rest} : FileUploadBtnProps) 
  {
    return (
    <FileUpload.Root
    maxFiles={maxFiles}
    maxFileSize={maxFileSize}
    minFileSize={minFileSize}
    accept={accept}
    onFileAccept={onFileAccept 
      ? (details : FileAcceptDetails) => onFileAccept(details)
    : undefined}
    onFileChange={onFileChange
      ? (details : FileChangeDetails) => onFileChange(details)
    : undefined}
    onFileReject={onFileReject
      ? (details : FileRejectDetails) => onFileReject(details)
    : undefined}>
      <FileUpload.HiddenInput />
      <FileUpload.Trigger asChild>
        <Button
        {...rest}>
          {children}
        </Button>
      </FileUpload.Trigger>
      {FileUploadLists ? <FileUpload.List /> : null}
    </FileUpload.Root>
  );
}

export { FileUploadBtn, FileUploadBtnProps, 
  FileAcceptDetails, FileChangeDetails, FileRejectDetails }