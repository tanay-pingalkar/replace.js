// good bad exmaple
const varia = new Str("var", "good");
function clicko() {
  varia.if("good", "bad");
  varia.elif("bad", "good");
}


// random user example
const user_name = new Str("user_name", "user_name");
const profile_photo  = new Str("profile_photo");
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

// todo list example
const arr=new Arr("arr",[]);
function addTodo(e){
  arr.push(e.target.value)
}

function remove(i){
  arr.splice(i,1)
}


// number example
const counter=new  Num("counter",0);
function add(){
  counter.incre();
}
function sub(){
  counter.decre();
}


// boolean exmaple
const bool = new Bool("bool");
function swap() {
  bool.swap();
}

// object example
const template=new Template("temp",`
<h1>object example</h1>
<h2>{{ obj.title }}</h2>
<h3>{{ obj.description }}</h3>
`,
);
const obj=new Obj("obj",{
  title:"this is title",
  description:"this is description"
});

















