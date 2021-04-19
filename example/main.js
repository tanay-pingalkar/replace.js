const varia = new Str(
  "varia" /* name of variable*/,
  "good" /* content of variable*/
);

function clicko() {
  varia.if("good" /* condition*/, "bad" /* callback*/);
  varia.elif("bad", "good");
}
