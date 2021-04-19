import { Str } from "../datatypes/string";

declare global {
  interface Window {
    variables: Array<element>;
    initialHTML: string;
    Str: typeof Str;
    replace: any;
  }
}

declare interface element {
  name: string;
  content: any;
}
