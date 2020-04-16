export const hasNoDecimals = (string) => {
  return !string.includes(".");
};

export const isZero = (string) => {
  return string === "0";
};

export const isOpertorWithZero = (string) => {
  return /([/x+-]0)$/.test(string);
};

export const isOperator = (string) => {
  return /[/x+-]/.test(string);
};

export const isMinus = (string) => {
  return string === "-";
};

export const isDivideByZero = (string) => {
  return /(.*)\/0$/.test(string);
};

export const endsWithOperator = (string) => {
  return /([/x+-])$/.test(string);
};

export const endsWithOtherOperatorAndMinus = (string) => {
  return /([/x+]-)$/.test(string);
};

export const replaceLastCharWith = (string, replacement) => {
  return string.slice(0, -1) + replacement;
};

export const getEndingNumber = (string) => {
  return string.match(/(-?\d+\.?\d*)$/)[0];
};
