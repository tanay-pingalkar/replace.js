import { init } from "../src/utils/init";
window.initialHTML =
  "<h1>{{ var }}</h1><h1>{{ (bool)=>bool? 'hello' : 'bye' }}</h1><p>{{ arr[0] }}</p>";

describe("gonna check if init works fine", () => {
  it("should replace all variables by empty string", () => {
    init();
    expect(document.body.innerHTML).toBe("<h1></h1><h1></h1><p></p>");
  });
});
