import * as XLSX from 'xlsx';

export const getFirstColumn = async (file: File | null | undefined) => {
  // file이 null 또는 undefined인 경우 [null] 반환
  if (file == null) {
    return [null];
  }

  try {
    const arrayBuffer = await file.arrayBuffer();
    const workbook = XLSX.read(arrayBuffer, { type: 'array' });
    const sheet = workbook.Sheets[workbook.SheetNames[0]];
    let row = 1;
    let result: any[] = [];

    while (true) {
      const cellAddress = `A${row}`;
      const cell = sheet[cellAddress];
      if (cell && cell.v != null && cell.v !== '') {
        result.push(cell.v);
        row++;
      } else {
        break;
      }
    }

    return result;
  } catch (error) {
    // 파일 처리 중 오류 발생 시 [null] 반환 (선택적)
    console.error('Error processing file:', error);
    return [null];
  }
};

export default getFirstColumn;