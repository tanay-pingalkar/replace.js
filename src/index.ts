import { Str } from "./datatypes/string";
import { replace } from "./replace";

declare global {
  interface Window {
    variables: any;
    initialHTML: string;
    Str: typeof Str;
    replace: any;
  }
}

window.initialHTML = document.body.innerHTML;
window.variables = {};
window.Str = Str;
window.replace = replace;
