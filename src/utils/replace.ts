import { arrayRegex, functionRegex, keyWordRegex } from "./regex";

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

    //keyword resolver
    html = html.replace(keyWordRegex(element.name), newContent);
    window.variables[i].content = newContent;

    // function resolver
    const funcs = window.initialHTML.match(functionRegex(element.name));
    if (funcs != null) {
      funcs.forEach((func, i) => {
        let res: any;
        if (element.name === name) {
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

    // array resolver
    const matched_arr = window.initialHTML.match(arrayRegex(element.name));
    if (matched_arr != null) {
      matched_arr.forEach((one) => {
        const onlyArr = one.slice(2, one.length - 2);
        let res = eval(`const func=(arr)=>${onlyArr};func(content)`);
        if (!res) {
          console.warn(`${onlyArr} is ${res}`);
          res = " ";
        }
        html = html.replace(one, res);
      });
    }
  });
  document.body.innerHTML = html;
};
