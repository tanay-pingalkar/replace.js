import { Bool } from "../datatypes/boolean";
import { Str } from "../datatypes/string";

declare global {
  interface Window {
    variables: Array<element>;
    initialHTML: string;
    Str: typeof Str;
    replace: any;
    Bool: typeof Bool;
  }
}

declare interface element {
  name: string;
  content: any;
}
