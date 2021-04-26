import { Template as type } from "../types/global";
import { keyWordRegex } from "../utils/regex";
export class Template {
  html: type;
  constructor(name: string, html: string) {
    window.initialHTML = window.initialHTML.replace(keyWordRegex(name), html);
    this.html = {
      name: name,
      content: html,
    };
  }
}
