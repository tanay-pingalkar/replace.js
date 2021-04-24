import { multiReplace } from "../src/utils/multiReplace";

window.initialHTML =
  "<h1>{{ var }}</h1><h1>{{ (bool)=>bool? 'hello' : 'bye' }}</h1><h1>{{ arr[0] }}</h1>";
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
window.variables.push({
  name: "arr",
  content: ["lol"],
  resolved: [],
});

describe("gonna check if multireplace works fine", () => {
  it("should replace all ", () => {
    multiReplace({
      var: "cool",
      bool: true,
      arr: ["pal"],
    });
    expect(document.body.innerHTML).toBe(
      "<h1>cool</h1><h1>hello</h1><h1>pal</h1>"
    );
  });
});
