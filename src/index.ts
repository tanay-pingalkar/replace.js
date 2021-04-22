import { Arr } from "./datatypes/array";
import { Bool } from "./datatypes/boolean";
import { Num } from "./datatypes/number";
import { Str } from "./datatypes/string";
import { init } from "./utils/init";
import { multiReplace } from "./utils/multiReplace";
import { replace } from "./utils/replace";

/*
all function that are meant to be available globally and to the user
*/
window.initialHTML = document.body.innerHTML;
init();
window.variables = [];
window.Str = Str;
window.replace = replace;
window.Bool = Bool;
window.Arr = Arr;
window.multiReplace = multiReplace;
window.Num = Num;
