import { functionRegex, keyWordRegex, arrayRegex } from "../src/utils/regex";

describe("gonna check if regex works fine", () => {
  const str =
    "<h1>{{ var }}</h1><h1>{{ (bool)=>bool? 'hello' : 'bye' }}</h1><h1>{{ arr[0] }}</h1>";
  it("should match functions", () => {
    expect(str.match(functionRegex("bool"))).toEqual([
      "{{ (bool)=>bool? 'hello' : 'bye' }}",
    ]);
  });
  it("should match keywords", () => {
    expect(str.match(keyWordRegex("var"))).toEqual(["{{ var }}"]);
  });
  it("should match array", () => {
    expect(str.match(arrayRegex("arr"))).toEqual(["{{ arr[0] }}"]);
  });
});
