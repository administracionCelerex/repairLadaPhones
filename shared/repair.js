"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addExtension = exports.removeBrackets = exports.removeBlankSpaces = void 0;
const removeBlankSpaces = (number) => {
    const numberWithoutBlank = number.replaceAll(" ", "").replaceAll("\t", "");
    return numberWithoutBlank;
};
exports.removeBlankSpaces = removeBlankSpaces;
const removeBrackets = (number) => {
    const numberWithoutBrackes = number.replaceAll("(", "").replace(")", "");
    return numberWithoutBrackes;
};
exports.removeBrackets = removeBrackets;
const isTenDigits = (number) => {
    if (number.length == 10) {
        return true;
    }
    return false;
};
const addExtension = (number) => {
    if (!isTenDigits(number))
        return number;
    return `+52${number}`;
};
exports.addExtension = addExtension;
