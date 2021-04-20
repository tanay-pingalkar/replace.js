export const keyWordRegex = (name: string): RegExp => {
  return new RegExp(`\\{\\{[\\s]*?${name}[\\s]*?\\}\\}`, "g");
};

export const functionRegex = (name: string): RegExp => {
  return new RegExp(
    `\\{\\{[\\s\\n]*?\\(${name}\\)=(>|&gt)[\\w\\W\s]*?\\}\\}`,
    "g"
  );
};

export const replaceAllRegex: RegExp = new RegExp(
  "(\\{\\{[\\s\\n]*?\\([\\w\\Ws]*?\\)=(>|&gt)[\\w\\Ws]*?\\}\\}|\\{\\{[\\s]*?[\\w\\Ws]*?[\\s]*?\\}\\})",
  "g"
);
