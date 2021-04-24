import { replace } from "../src/utils/replace";

window.initialHTML =
  "<h1>{{ var }}</h1><h1>{{ (bool)=>bool? 'hello' : 'bye' }}</h1>";
window.variables = [];
window.variables.push({
  name: "var",
  content: "lol",
  resolved: [],
});
window.variables.push({
  name: "bool",
  content: false,
  resolved: ["bye"],
});

describe("gonna check if replace(heart of replace.js) works fine", () => {
  it("should replace var to lol", () => {
    replace("var", "lol");
    expect(document.body.innerHTML).toBe("<h1>lol</h1><h1>bye</h1>");
  });

  it("should eval function and replace it", () => {
    replace("bool", true);
    expect(document.body.innerHTML).toBe("<h1>lol</h1><h1>hello</h1>");
    expect(window.variables[1].resolved[0]).toBe("hello");
  });

  it("should eval array", () => {
    window.initialHTML = "<h1>{{ arr[0] }}</h1>";
    window.variables = [];
    window.variables.push({
      name: "arr",
      content: ["lol"],
      resolved: [],
    });
    replace("arr", ["lol"]);
    expect(document.body.innerHTML).toBe("<h1>lol</h1>");
  });
});
