import { Bool } from "./datatypes/boolean";
import { Str } from "./datatypes/string";
import { init } from "./utils/init";
import { replace } from "./utils/replace";

window.initialHTML = document.body.innerHTML;
init();
window.variables = [];
window.Str = Str;
window.replace = replace;
window.Bool = Bool;
