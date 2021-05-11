import { replace } from "../utils/replace";

export class Str {
  private ifResult: boolean;
  name: string;
  content: object;
  constructor(name: string, content: object) {
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

  set(content: string) {
    this.content = content;
    replace(this.name, this.content);
  }
}
