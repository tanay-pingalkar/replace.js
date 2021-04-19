const user_name = new Str("user_name", "user_name");
const profile_photo = new Str("profile_photo", "./logo.svg");

async function main() {
  let data = await fetch("https://randomuser.me/api/?results=1");
  data = await data.json();
  user_name.set(data.results[0].name.first);
  profile_photo.set(data.results[0].picture.medium);
}
main();
