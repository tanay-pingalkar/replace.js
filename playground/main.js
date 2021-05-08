let innerH = `
<h1>Exercises</h1>
    <div>
      <h1>random user example</h1>
      {{ 
        (profile_photo)=>
          (profile_photo==='loading')?
          '<h1>loading</h1>' : 
          \`<img src="\${profile_photo}" 
          alt="photo"height="100px" 
          width="100px"/>\` 
      }}
      

      <h1>{{ user_name }}</h1>
      <button onclick="main()">get random user</button>
    </div>
    <div>
      <h1>good bad example</h1>
      <h1 class="{{ var }}">{{ var }}</h1>
      <button onclick="clicko()" class="{{ var }}">this is {{ var }}</button>
    </div>
     
    <div>
      <h1>number example with a counter app</h1>
      <button onclick="add()">+</button><button>{{ counter }}</button><button onclick="sub()">-</button>
    </div>
    <div>
      <h1>array example with a todo list project</h1>
      <input onchange="addTodo(event)">
      {{ 
        (arr)=>{
        let arre=[];
        arr.forEach((ele,i)=>{
          arre.push(\`
          <p>\${ele}</p>
          <button onclick="remove(\${i})">remove</button>
          \`)
        })
        return arre.join("")
        } 
      }}
    </div>
    <div>
      <h1>boolean test</h1>
      <button onclick="swap()">
        {{ (bool)=> (bool===true) ? '<h1>big button true</h1>' : '<h3>small button false</h3>' }}
      </button>
    </div>
    <div>
      {{ temp }}
    </div>
`;
let innerjs = `
// good bad exmaple
const varia = new Str("var", "good");
window.clicko=function clicko() {
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
window.main=main;
main();

// todo list example
const arr=new Arr("arr",[]);
window.addTodo=function addTodo(e){
  arr.push(e.target.value)
}

window.remove=function remove(i){
  arr.splice(i,1)
}


// number example
const counter=new  Num("counter",0);
window.add=function add(){
  counter.incre();
}
window.sub=function sub(){
  counter.decre();
}


// boolean exmaple
const bool = new Bool("bool");
window.swap=function swap() {
  bool.swap();
}

// object example
const template=new Template("temp",\`
<h1>object example</h1>
<h2>{{ obj.title }}</h2>
<h3>{{ obj.description }}</h3>
\`);
const obj=new Obj("obj",{
  title:"this is title",
  description:"this is description"
});
`;

document.getElementById("html").value = innerH;
document.getElementById("js").value = innerjs;
window.onReplace = () => {
  document.getElementById("html").value = innerH;
  document.getElementById("js").value = innerjs;
};

const mode = new Obj("mode", {
  color: "white",
  name: "night",
  bg: "rgb(0, 0, 26)",
  button: "blue",
  nav: "rgb(0, 0, 77)",
});

function toggle() {
  innerH = document.getElementById("html").value;
  innerjs = document.getElementById("js").value;
  if (mode.content.name === "day") {
    mode.set({
      color: "white",
      name: "night",
      bg: "rgb(0, 0, 26)",
      button: "blue",
      nav: "rgb(0, 0, 77)",
    });
  } else {
    mode.set({
      color: "black",
      name: "day",
      button: "yellow",
      bg: "white",
      nav: "lightgray",
    });
  }
}
let script = document.createElement("script");
document.body.append(script);

const template = new Template("template", "");
function tempChange() {
  innerH = document.getElementById("html").value;
  innerjs = document.getElementById("js").value;
  template.set(innerH);
  eval(innerjs);
}
