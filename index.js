import xlsx from 'xlsx'
import fs from 'fs'

const workbook = xlsx.readFile('./visiiit.xlsx');
const sheetName = workbook.SheetNames[0];
const worksheet = workbook.Sheets[sheetName];

const data = xlsx.utils.sheet_to_json(worksheet);

fs.writeFileSync('data.json', JSON.stringify(data, null, 2), 'utf8');
