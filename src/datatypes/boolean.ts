import { replace } from "../utils/replace";

export class Bool {
  name: string;
  content: boolean;
  constructor(name: string, content: boolean = false) {
    window.variables.push({
      name: name,
      content: content,
      resolved: [],
    });
    this.name = name;
    this.content = content;
    replace(this.name, this.content);
  }

  set(content: boolean) {
    this.content = content;
    replace(this.name, this.content);
  }

  swap() {
    this.content = !this.content;
    replace(this.name, this.content);
  }

  get val(): boolean {
    return this.content;
  }
}
