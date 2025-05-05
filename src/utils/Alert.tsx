import Swal from 'sweetalert2';

interface AlertProps {
    position? : 'top' | 'top-start' | 'top-end' | 
    'center' | 'center-start' | 'center-end' 
    | 'bottom' | 'bottom-start' | 'bottom-end';
    title? : string;
    text? : string;
    icon? : "warning" | "error" | "success" | "info" | "question";
    confirmBtnText? : string;
    allowOutsideClick? : boolean;
}

export default function Alert({position = "top", title="", text="", icon="success",
    confirmBtnText="확인", allowOutsideClick=false} : AlertProps) {
    Swal.fire({
        position: position,
        title: title,
        text: text,
        icon: icon,
        confirmButtonText: confirmBtnText,
        allowOutsideClick: allowOutsideClick, // 외부 클릭 방지
        showClass: {
            popup: 'swal2-show'
        },
        customClass: {
            container: 'swal2-container-custom' // 커스텀 클래스 추가
        }
    })
}

export {Alert, AlertProps};