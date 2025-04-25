import * as XLSX from 'xlsx';

async function getFirstColumn(file: File | null | undefined): Promise<any[]> {
  if (!file) {
    return [null];
  }

  const buffer = await file.arrayBuffer();          // :contentReference[oaicite:3]{index=3}

  const workbook = XLSX.read(buffer, { type: 'array' });  // :contentReference[oaicite:4]{index=4}
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  const result: any[] = [];
  let row = 1;
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
}

export default getFirstColumn;
