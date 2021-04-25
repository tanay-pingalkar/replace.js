import { replace } from "../utils/replace";

export class Obj {
  name: string;
  content: Object;
  constructor(name: string, content: Object = {}) {
    if (typeof content != "object") {
      throw new Error(`object is expected found ${typeof content}`);
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

  set(content: Object) {
    this.content = content;
    replace(this.name, this.content);
  }
}
