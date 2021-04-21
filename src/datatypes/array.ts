import { replace } from "../utils/replace";

export class Arr {
  name: string;
  content: string;
  constructor(name: string, content: Array<any> = []) {
    if (typeof content != "string") {
      throw new Error(`string is expected found ${typeof content}`);
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
}
