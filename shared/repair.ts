export const removeBlankSpaces = (number: String) => {
  const numberWithoutBlank = number.replaceAll(" ", "").replaceAll("\t", "");
  return numberWithoutBlank;
};

export const removeBrackets = (number: String) => {
  const numberWithoutBrackes = number.replaceAll("(", "").replace(")", "");
  return numberWithoutBrackes;
};

const isTenDigits = (number: String) => {
  if (number.length == 10) {
    return true;
  }
  return false;
};

export const addExtension = (number: String) => {
  if (!isTenDigits(number)) return number;

  return `+52${number}`;
};
