import { Template as type } from "../types/global";
import { init } from "../utils/init";
import { keyWordRegex } from "../utils/regex";
import { replace } from "../utils/replace";
export class Template {
  html: type;
  initial: string;
  constructor(name: string, html: string, repeat = 1) {
    this.initial = window.initialHTML;
    window.initialHTML = window.initialHTML.replace(
      keyWordRegex(name),
      html.repeat(repeat)
    );
    this.html = {
      name: name,
      content: html.repeat(repeat),
    };
    replace();
  }

  set(html: string) {
    window.initialHTML = this.initial.replace(
      keyWordRegex(this.html.name),
      html
    );
    this.html.content = html;
    replace();
  }
  // repeat(num: number) {
  //   this.html.content = this.html.content.repeat(num);
  //   window.initialHTML = window.initialHTML.replace(
  //     keyWordRegex(this.html.name),
  //     this.html.content
  //   );
  //   replace();
  // }
}
