import XSLX from "xlsx";
import { dataExcel } from "../interfaces/interfaces";

export const readExcel = (path: string) => {
  const workbook = XSLX.readFile(path);
  const workbookSheet = workbook.SheetNames;
  const sheet = workbookSheet[0];
  const dataExcel = <dataExcel[]>XSLX.utils.sheet_to_json(
    workbook.Sheets[sheet],
    {
      raw: false,
    }
  );

  // console.log(f);

  return dataExcel;
};
