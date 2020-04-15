export const isOnlyZero = (string) => {
  return string === "0";
};

export const hasNoDecimals = (string) => {
  return !string.includes(".");
};
