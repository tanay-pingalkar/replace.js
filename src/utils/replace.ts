import { functionRegex, keyWordRegex } from "./regex";

export const replace = (name: string, content: any) => {
  let html: string = window.initialHTML;
  window.variables.forEach((element, i) => {
    let newContent: string;

    if (element.name === name) newContent = content;
    else newContent = element.content;
    html = html.replaceAll(keyWordRegex(element.name), newContent);
    window.variables[i].content = newContent;

    const funcs = window.initialHTML.match(functionRegex(element.name));
    if (funcs != null) {
      funcs.forEach((func) => {
        let onlyfunc = func.slice(2, func.length - 2);
        onlyfunc = onlyfunc.replace("&gt;", ">");
        let res: any;
        if (typeof newContent === "string") {
          res = eval(`const func=${onlyfunc};func("${newContent}")`);
        } else {
          res = eval(`const func=${onlyfunc};func(${newContent})`);
        }
        html = html.replaceAll(func, res);
      });
    }
  });
  document.body.innerHTML = html;
  return content;
};