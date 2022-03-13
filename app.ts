import {
  removeBlankSpaces,
  removeBrackets,
  addExtension,
} from "./shared/repair";

import { readExcel, writeExcel, writeJson } from "./excelApis/excelApis";

const repairPhone = (phoneString: String) => {
  phoneString = phoneString.trim();

  if (phoneString === "") return "";
  const withoutSpaces = removeBlankSpaces(phoneString);
  const withoutBrackets = removeBrackets(withoutSpaces);
  const addingfifthytwo = addExtension(withoutBrackets);

  return addingfifthytwo;
};

const tranformedPhones = (phoneNumbersString: string) => {
  if (phoneNumbersString.length < 0) return "";

  const phoneNumbers: string[] = phoneNumbersString.split(",");
  //console.log(phoneNumbers);

  const newPhoneNumbers = phoneNumbers.map((ph) => {
    const nph = repairPhone(ph);

    //console.log(nph.length);
    return nph;
  });

  const newPhonesJoined = newPhoneNumbers.join(",");
  return newPhonesJoined;
};

const path = "data";

const dataExcel = readExcel(path);
let i = 0;

//console.log(dataExcel);

const finalData = dataExcel.map((columns) => {
  const phoneNumbers = columns.telefonosGmail;
  const dataTrasformed = tranformedPhones(phoneNumbers);

  return { ...columns, telefonosGmail: dataTrasformed };
});

console.log(finalData);

writeExcel(path, finalData);
writeJson(path, finalData);
