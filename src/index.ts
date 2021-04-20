import { Bool } from "./datatypes/boolean";
import { Str } from "./datatypes/string";
import { replace } from "./utils/replace";

window.initialHTML = document.body.innerHTML;
window.variables = [];
window.Str = Str;
window.replace = replace;
window.Bool = Bool;
