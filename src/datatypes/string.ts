import { replace } from "../replace";

export class Str {
  name: string;
  content: string;
  ifResult: boolean;
  constructor(name: string, content: string = "") {
    this.name = name;
    this.content = content;
    replace(this.name, this.content);
    window.variables[this.name] = content;
  }

  set(content: string) {
    this.content = content;
    replace(this.name, this.content);
    window.variables[this.name] = content;
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
}
