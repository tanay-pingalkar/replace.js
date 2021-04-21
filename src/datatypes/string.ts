import { replace } from "../utils/replace";

export class Str {
  private ifResult: boolean;
  name: string;
  content: string;
  constructor(name: string, content: string = "") {
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

  if(state: string, callback: Function | string): boolean {
    if (this.content === state) {
      if (typeof callback === "string") {
        this.set(callback);
      } else {
        callback();
      }

      this.ifResult = true;
      return true;
    } else {
      function elseif() {}
      this.ifResult = false;
      return false;
    }
  }

  else(callback: Function | string): boolean {
    if (this.ifResult) {
      return false;
    }
    if (typeof callback === "string") {
      this.set(callback);
    } else {
      callback();
    }
    return true;
  }

  elif(state: string, callback: Function | string) {
    if (typeof callback != "string" && typeof callback != "function") {
      throw new Error(`string is expected found ${typeof callback}`);
    }
    if (this.ifResult) {
      return false;
    }
    if (this.content === state) {
      if (typeof callback === "string") {
        this.set(callback);
      } else {
        callback();
      }
      return true;
    }
    return false;
  }
  slice(start: number, end?: number) {
    if (end) this.set(this.content.slice(start, end));
    else this.set(this.content.slice(start));
  }
  replace(keyword: string, content: string) {
    this.set(this.content.replace(keyword, content));
  }
  replaceAll(keyword: string, content: string) {
    this.set(this.content.replaceAll(keyword, content));
  }
}
