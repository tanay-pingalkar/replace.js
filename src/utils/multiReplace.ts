import { multiReplace as type } from "../types/global";
import { functionRegex, keyWordRegex } from "./regex";

export const multiReplace = (data: type): void => {
  let html: string = window.initialHTML;
  window.variables.forEach((element, i) => {
    let newContent: string;

    if (data[element.name]) newContent = data[element.name];
    else newContent = element.content;
    html = html.replaceAll(keyWordRegex(element.name), newContent);
    window.variables[i].content = newContent;

    const funcs = window.initialHTML.match(functionRegex(element.name));
    if (funcs != null) {
      funcs.forEach((func, i) => {
        let res: any;
        if (data[element.name]) {
          console.log(funcs);
          let onlyfunc = func.slice(2, func.length - 2);
          onlyfunc = onlyfunc.replace("&gt;", ">");
          if (typeof newContent === "string") {
            res = eval(`const func=${onlyfunc};func("${newContent}");`);
          } else {
            res = eval(`const func=${onlyfunc};func(${newContent})`);
          }
          element.resolved[i] = res;
        } else {
          res = element.resolved[i];
        }
        html = html.replaceAll(func, res);
      });
    }
  });
  document.body.innerHTML = html;
};
