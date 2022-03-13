import {
  removeBlankSpaces,
  removeBrackets,
  addExtension,
} from "./shared/repair";

import { readExcel } from "./excelApis/excelApis";

/*const originalNumber = "(33) 1525 7877";
console.log("original");
console.log(originalNumber);
console.log("withoutSpaces");
const withoutSpaces = removeBlankSpaces(originalNumber);
console.log(withoutSpaces);
console.log("withoutBrackets");
const withoutBrackets = removeBrackets(withoutSpaces);
console.log(withoutBrackets);
console.log("addind +52");
const addingfifthytwo = addExtension(withoutBrackets);
console.log(addingfifthytwo);*/

const repairPhone = (phoneString: String) => {
  phoneString = phoneString.trim();

  if (phoneString === "") return "";
  //console.log("original");
  //console.log(phoneString);
  //console.log("withoutSpaces");
  const withoutSpaces = removeBlankSpaces(phoneString);
  //console.log(withoutSpaces);
  //console.log("withoutBrackets");
  const withoutBrackets = removeBrackets(withoutSpaces);
  //console.log(withoutBrackets);
  //console.log("addind +52");
  const addingfifthytwo = addExtension(withoutBrackets);
  //console.log(addingfifthytwo);

  return addingfifthytwo;
};

const tranformedPhones = (phoneNumbersString: string) => {
  if (phoneNumbersString.length < 0) return "";

  const phoneNumbers: string[] = phoneNumbersString.split(",");
  console.log(phoneNumbers);

  const newPhoneNumbers = phoneNumbers.map((ph) => {
    const nph = repairPhone(ph);

    //console.log(nph.length);
    return nph;
  });

  const newPhonesJoined = newPhoneNumbers.join(",");
  return newPhonesJoined;
};

const path = "data/extension.xlsx";

const dataExcel = readExcel(path);
let i = 0;
for (const columnns of dataExcel) {
  const phoneNumbers = columnns.telefonosGmail;
  //console.log(`i ${i}`);
  //console.log(phoneNumbers.trim());
  //i++;
  console.log(tranformedPhones(phoneNumbers));
}
//console.log(dataExcel[165]);

//console.log(tranformedPhones(dataExcel[165].telefonosGmail.trim()));
//console.log(tranformedPhones("3312949604,(33) 1525 7877"))
