import * as XLSX from 'xlsx';

function getFirstColumn(file: File | null | undefined) {
  if (file == null) {
    return [null];
  }

  const arrayBuffer = file.arrayBuffer();
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
};

export default getFirstColumn;