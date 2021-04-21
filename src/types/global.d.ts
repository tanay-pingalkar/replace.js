import { Arr } from "../datatypes/array";
import { Bool } from "../datatypes/boolean";
import { Str } from "../datatypes/string";
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
  }
}

declare interface element {
  name: string;
  content: any;
  resolved: Array<string>;
}

declare interface multiReplace {
  [keys: string]: string;
}
