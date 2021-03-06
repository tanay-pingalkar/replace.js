import { multiReplace as multireplaceType } from "../types/global";
import { arrAndObjRegex, functionRegex, keyWordRegex } from "./regex";

/*
this is utility is same as replace function, source code is
also same but with some small changes, it can now replace mutiple
variables, functions an conditions
*/
export const multiReplace = (data: multireplaceType): void => {
  let html: string = window.initialHTML;
  window.variables.forEach((element, i) => {
    let newContent: any;
    if (data[element.name]) newContent = data[element.name];
    else newContent = element.content;

    //keyword resolver
    html = html.replace(keyWordRegex(element.name), newContent);
    window.variables[i].content = newContent;

    // function resolver
    const funcs = window.initialHTML.match(functionRegex(element.name));
    if (funcs != null) {
      funcs.forEach((func, i) => {
        let res: any;
        if (data[element.name]) {
          let onlyfunc = func.slice(2, func.length - 2);
          // actually there is a problem in html, in html, sometimes ">" is written as "&gt;"
          onlyfunc = onlyfunc.replace(/&gt;/g, ">");
          res = eval(`const func=${onlyfunc};func(newContent);`);
          element.resolved[i] = res;
        } else {
          res = element.resolved[i];
        }
        html = html.replace(func, res);
      });
    }

    // array and object resolver
    const matched_arr = window.initialHTML.match(arrAndObjRegex(element.name));
    if (matched_arr != null) {
      matched_arr.forEach((one) => {
        const onlyArr = one.slice(2, one.length - 2);
        let res = eval(
          `const func=(this_is_reserved_keyword)=>{let ${element.name}=this_is_reserved_keyword;return ${onlyArr}};func(newContent)`
        );
        if (!res) {
          console.warn(`${onlyArr} is ${res}`);
          res = " ";
        }
        html = html.replace(one, res);
      });
    }
  });

  document.body.innerHTML = html;
  window.onReplace();
};
