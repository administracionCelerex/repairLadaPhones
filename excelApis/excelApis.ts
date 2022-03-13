import XSLX from "xlsx";
import { dataExcel } from "../interfaces/interfaces";
import fs from "fs";

export const readExcel = (path: string) => {
  const workbook = XSLX.readFile(`${path}/extension.xlsx`);
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

export const writeExcel = (path: string, data: dataExcel[]) => {
  const sheet = XSLX.utils.json_to_sheet(data);
  const workbook = XSLX.utils.book_new();
  workbook.SheetNames.push(`sheet1`);
  workbook.Sheets["sheet1"] = sheet;
  XSLX.writeFile(workbook, `${path}/extensionRepaired.xlsx`);
};

export const writeJson = (path: string, data: dataExcel[]) => {
  try {
    const JSONData = data.map((da) => {
      const phoneNumbersString = da.telefonosGmail.split(",");

      const phoneNumbers = phoneNumbersString.map((phoneNum) => {
        return {
          type: "Principal",
          value: phoneNum == "***" ? "" : phoneNum,
        };
      });

      return {
        resourceId: da.IDGMAIL,
        etag: da.etagGmail,
        name: da.nombreZoho,
        phoneNumbers,
      };
    });
    const finalData = JSON.stringify(JSONData);
    fs.writeFileSync(`${path}/data.json`, finalData);
  } catch (err) {
    console.log(`Error Writing JSON FILE ${err}`);
  }
};
