import { Arr } from "../datatypes/array";
import { Bool } from "../datatypes/boolean";
import { Num } from "../datatypes/number";
import { Obj } from "../datatypes/object";
import { Str } from "../datatypes/string";
import { Template as templateClass } from "../datatypes/template";
import { multiReplace } from "../utils/multiReplace";

declare global {
  interface Window {
    variables: Array<element>;
    initialHTML: string;
    Str: typeof Str;
    replace: any;
    Bool: typeof Bool;
    multiReplace: typeof multiReplace;
    Arr: typeof Arr;
    Num: typeof Num;
    Obj: typeof Obj;
    Template: typeof templateClass;
  }
}

declare interface element {
  name: string;
  content: any;
  resolved: Array<string>;
}

declare interface multiReplace {
  [keys: string]: string | boolean | Array<any> | number;
}

declare interface Template {
  name: string;
  content: string;
}
