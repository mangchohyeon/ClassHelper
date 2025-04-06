import Swal, { SweetAlertResult, SweetAlertOptions } from "sweetalert2";

export type SwalProps = SweetAlertOptions;

export async function Swalert(props: SwalProps): Promise<SweetAlertResult> {
    try {
        return await Swal.fire(props);
    } catch (error) {
        console.error('SweetAlert error:', error);
        throw error;
    }
}