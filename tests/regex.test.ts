import {
  functionRegex,
  keyWordRegex,
  arrAndObjRegex,
} from "../src/utils/regex";

describe("gonna check if regex works fine", () => {
  const str =
    "<h1>{{ var }}</h1><h1>{{ (bool)=>bool? 'hello' : 'bye' }}</h1><h1>{{ arr[0] }}</h1>\n<h4>{{ obj.lol[0].lol }}</h4>";
  it("should match functions", () => {
    expect(str.match(functionRegex("bool"))).toEqual([
      "{{ (bool)=>bool? 'hello' : 'bye' }}",
    ]);
  });
  it("should match keywords", () => {
    expect(str.match(keyWordRegex("var"))).toEqual(["{{ var }}"]);
  });
  it("should match array", () => {
    expect(str.match(arrAndObjRegex("arr"))).toEqual(["{{ arr[0] }}"]);
  });
  it("should match object", () => {
    expect(str.match(arrAndObjRegex("obj"))).toEqual(["{{ obj.lol[0].lol }}"]);
  });
});
