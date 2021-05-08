import {
  Str,
  replace,
  Bool,
  Arr,
  multiReplace,
  Num,
  Obj,
  Template,
} from "../index";
import { replaceAllRegex } from "./regex";
/*
replace all variable to empty string 
*/
export const init = (html: string): void => {
  window.variables = [];
  window.Str = Str;
  window.replace = replace;
  window.Bool = Bool;
  window.Arr = Arr;
  window.multiReplace = multiReplace;
  window.Num = Num;
  window.Obj = Obj;
  window.Template = Template;
  window.initialHTML = html;
  window.onReplace = () => {};
  document.body.innerHTML = window.initialHTML.replace(replaceAllRegex, "");
};
