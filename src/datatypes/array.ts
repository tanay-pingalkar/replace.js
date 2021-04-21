import { replace } from "../utils/replace";

export class Arr {
  name: string;
  content: Array<any>;
  constructor(name: string, content: Array<any> = []) {
    if (typeof content != "object") {
      throw new Error(`array is expected found ${typeof content}`);
    }
    window.variables.push({
      name: name,
      content: content,
      resolved: [],
    });
    this.name = name;
    this.content = content;
    replace(this.name, this.content);
  }

  set(content: Array<any>) {
    this.content = content;
    replace(this.name, this.content);
  }

  push(content: any) {
    this.content.push(content);
    replace(this.name, this.content);
  }

  pop() {
    this.content.pop();
    replace(this.name, this.content);
  }

  unshift(content: any) {
    this.content.unshift(content);
    replace(this.name, this.content);
  }

  splice(start: number, end: number) {
    this.content.splice(start, end);
    replace(this.name, this.content);
  }

  index(i: number): any {
    return this.content[i];
  }

  edit(i: number, content: any) {
    this.content[i] = content;
    replace(this.name, this.content);
  }

  length(): number {
    return this.content.length;
  }
}
