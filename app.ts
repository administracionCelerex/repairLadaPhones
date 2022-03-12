import {
  removeBlankSpaces,
  removeBrackets,
  addExtension,
} from "./shared/repair";

const originalNumber = "(33) 1296 54 9 8 ";
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
console.log(addingfifthytwo);
