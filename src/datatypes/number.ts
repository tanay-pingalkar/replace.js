import { replace } from "../utils/replace";

export class Num {
  private ifResult: boolean;
  name: string;
  content: number;
  constructor(name: string, content: number = 0) {
    window.variables.push({
      name: name,
      content: content,
      resolved: [],
    });
    this.name = name;
    this.content = content;
    replace(this.name, this.content);
  }

  set(content: number) {
    this.content = content;
    replace(this.name, this.content);
  }

  incre(num: number = 1) {
    this.content = this.content + num;
    replace(this.name, this.content);
  }
  decre(num: number = 1) {
    this.content = this.content - num;
    replace(this.name, this.content);
  }

  else(callback: Function | number): boolean {
    if (this.ifResult) {
      return false;
    }
    if (typeof callback === "number") {
      this.set(callback);
    } else {
      callback();
    }
    return true;
  }

  if(state: number, callback: Function | number): boolean {
    if (this.content === state) {
      if (typeof callback === "number") {
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

  elif(state: number, callback: Function | number) {
    if (typeof callback != "number" && typeof callback != "function") {
      throw new Error(`string is expected found ${typeof callback}`);
    }
    if (this.ifResult) {
      return false;
    }
    if (this.content === state) {
      if (typeof callback === "number") {
        this.set(callback);
      } else {
        callback();
      }
      return true;
    }
    return false;
  }
}
