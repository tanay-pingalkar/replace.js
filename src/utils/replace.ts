import { functionRegex, keyWordRegex } from "./regex";

/*
the main utility of replace.js, this replaces {{ name }} to the given 
content , it also do a great job by resolving all condition's  and 
functions. PLease change this code very carefully, a missing symbol can 
cause big error cause it the heart of the program.
*/
export const replace = (name: string, content: any): void => {
  let html: string = window.initialHTML;
  window.variables.forEach((element, i) => {
    let newContent: string;

    if (element.name === name) newContent = content;
    else newContent = element.content;
    html = html.replaceAll(keyWordRegex(element.name), newContent);
    window.variables[i].content = newContent;

    const funcs = window.initialHTML.match(functionRegex(element.name));
    if (funcs != null) {
      funcs.forEach((func, i) => {
        let res: any;
        if (element.name === name) {
          console.log(funcs);
          let onlyfunc = func.slice(2, func.length - 2);
          // actually there is a problem in html, in html, sometimes ">" is written as "&gt;"
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
