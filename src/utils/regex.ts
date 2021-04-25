/*
this is where all regular expressions are stored. 
Please handle this regex carefully. a missing symbol 
can cause a big errors. note "\\" is turned to "\"
means "\s" will be "\\s"
*/

export const keyWordRegex = (name: string): RegExp => {
  return new RegExp(`\\{\\{[\\s]*?${name}[\\s]*?\\}\\}`, "g");
};

export const functionRegex = (name: string): RegExp => {
  return new RegExp(
    `\\{\\{[\\s\\n]*?\\(${name}\\)=(>|&gt)[\\w\\W\s]*?\\}\\}`,
    "g"
  );
};

export const arrAndObjRegex = (name: string): RegExp => {
  return new RegExp(
    `\\{\\{[\\s\\n]*?\\${name}((\\[\\d\\]).*|\\.([\\.]?[\\w\\W]).*)[\\s\\n]*?\\}\\}`,
    "g"
  );
};
export const replaceAllRegex: RegExp = new RegExp(
  "(\\{\\{[\\s\\n]*?\\([\\w\\Ws]*?\\)=(>|&gt)[\\w\\Ws]*?}\\}|\\{\\{[\\s]*?[\\w\\Ws]*?[\\s]*?\\}\\}|\\{\\{[\\s\\n]*?[\\w\\W]*?\\(\\[\\d\\]\\).*[\\s\\n]*?\\}\\})",
  "g"
);
