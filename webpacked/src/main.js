import { Str,Arr,Num,Bool,Obj, Template} from "../../build/index";
import randomUser from "./components/randomUser/index.html"
import objectExample from "./components/objectExample/index.html"

new Template("randomUser",randomUser);
new Template("objectExample",objectExample);


const user_name = new Str("user_name", "user_name");
const profile_photo  = new Str("profile_photo");
const bool = new Bool("bool");
const varia = new Str("var", "good");
const arr=new Arr("arr",[]);
const counter=new  Num("counter",0);
const pp=new Str("pp","kfjerjj");
const lol=new Arr("lol",[1])
const obj=new Obj("obj",{
  title:"this is title",
  description:"this is description"
});


window.main=async function main() {
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

window.swap=function swap() {
  bool.swap();
}


window.clicko=function clicko() {
  varia.if("good", "bad");
  varia.elif("bad", "good");
}

window.clicko=function addTodo(e){
  arr.push(e.target.value)
}

window.remove=function remove(i){
  arr.splice(i,1)
}

window.add=function add(){
  counter.incre();
}
window.sub=function sub(){
  counter.decre();
}
