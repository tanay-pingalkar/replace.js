import { Str } from "../datatypes/string";

declare global {
  interface Window {
    variables: any;
    initialHTML: string;
    Str: typeof Str;
    replace: any;
  }
}
