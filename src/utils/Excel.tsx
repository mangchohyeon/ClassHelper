import * as XLSX from 'xlsx';

async function getFirstColumn(file: File | null | undefined): Promise<any[]> {
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
    console.error('Error processing file:', error);
    return [null];
  }
};

export default getFirstColumn;