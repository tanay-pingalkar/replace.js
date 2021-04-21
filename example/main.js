const user_name = new Str("user_name", "user_name");
const profile_photo = new Str("profile_photo");
const bool = new Bool("bool");
const varia = new Str("var", "good");
const str = new Str("str", "lol");

async function main() {
  profile_photo.set("loading");
  let data = await fetch("https://randomuser.me/api/?results=1");
  data = await data.json();
  // user_name.set(data.results[0].name.first);
  // profile_photo.set(data.results[0].picture.medium);
  multiReplace({
    user_name: data.results[0].name.first,
    profile_photo: data.results[0].picture.medium,
  });
}
main();

function swap() {
  bool.swap();
}

function clicko() {
  varia.if("good", "bad");
  varia.elif("bad", "good");
}
