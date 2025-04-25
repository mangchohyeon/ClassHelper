import { FileUpload, Button, useFileUpload, } from "@chakra-ui/react";
import { ButtonProps } from "./Button";

interface FileUploadBtnProps extends ButtonProps {
    maxFiles? : number;
    maxFileSize? : number;
    minFileSize? : number;
    accept? : string| string[];
    onFileAccept? : any;
    onFileChange? : any;
    onFileReject? : any;
    size? : "sm" | "md" | "lg" | "xl" | "2xl" | "2xs" | "xs" | undefined;
    FileUploadLists? : boolean;
}

interface FileAcceptDetails {
  /** 사용자가 수락된 파일 리스트 */
  acceptedFiles: File[];
}

export default function FileUploadBtn(props: FileUploadBtnProps) {
  const fileUpload = useFileUpload({
    maxFiles : props.maxFiles,
    maxFileSize : props.maxFileSize
  });

  const accepted = fileUpload.acceptedFiles.map((file) => file.name);
  const rejected = fileUpload.rejectedFiles.map((e) => e.file.name);

  
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
      colorPalette={props.color}
      rounded={props.rounded}
      loading={props.loading}
      loadingText={props.loadingText}
      onClick={props.onClick}>
        {props.children}
      </Button>
    </FileUpload.Trigger>
    {props.FileUploadLists ? <FileUpload.List /> : null}
  </FileUpload.Root>
  );
}

export { FileUploadBtn, FileUploadBtnProps, FileAcceptDetails }