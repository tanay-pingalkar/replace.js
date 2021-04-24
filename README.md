# Replace.js

## a lightweight reactive frontend library

![logo](https://github.com/tanay-pingalkar/replace.js/blob/main/example/logo.png)

## index.html

```html
<body>
  <h1 class="{{ var }}">{{ var }}</h1>
  <button onclick="clicko()" class="{{ var }}">this is {{ var }}</button>
  <script
    src="https://cdn.jsdelivr.net/gh/tanay-pingalkar/replace.js@v0.0.1/dist/bundle.min.js"
    type="text/javascript"
  ></script>
  <script src="https://cdn.jsdelivr.net/gh/tanay-pingalkar/replace.js@v0.0.2/dist/bundle.min.js" type="text/javascript"></script>

  <script src="main.js" type="text/javascript"></script>
</body>
```

## main.js

```javascript
const varia = new Str("var", "good");

function clicko() {
  varia.if("good", "bad");
  varia.elif("bad", "good");
}
```

## style.css

```css
.good {
  color: blue;
}
.bad {
  color: red;
}
```

## voila

![video](https://github.com/tanay-pingalkar/replace.js/blob/main/example/Screencast%202021-04-19%2011%2033%2032.gif)

## conditions

let see one more example, lets make a random user generator

- html

```html
<body>
  <img
    src="
      {{ 
          (profile_photo)=>(profile_photo==='loading') ? './logo.svg' : profile_photo
      }}"
    alt="photo"
    height="100px"
    width="100px"
  />
  <h1>{{ user_name }}</h1>
  <button onclick="main()">get random user</button>
  <script src="https://cdn.jsdelivr.net/gh/tanay-pingalkar/replace.js@v0.0.2/dist/bundle.min.js" type="text/javascript"></script>
  <script src="main.js" type="text/javascript"></script>
</body>
```

- javascript

```javascript
const user_name = new Str("user_name", "user_name");
const profile_photo = new Str("profile_photo", "loading");

async function main() {
  profile_photo.set("loading");
  let data = await fetch("https://randomuser.me/api/?results=1");
  data = await data.json();
  user_name.set(data.results[0].name.first);
  profile_photo.set(data.results[0].picture.medium);
}
main();
```

- and thats it <br>
![video](https://github.com/tanay-pingalkar/replace.js/blob/main/example/random.gif)

as you see this is how conditions works in replace.js, whenever you will change value of `profile_photo` by `profile_photo.set()`, the following
condition will also run.

```javascript
{
  {
    (profile_photo) =>
      profile_photo === "loading" ? "./logo.svg" : profile_photo;
  }
}
```

```javscript
{{
(name_of_var)=>{
\\ can do any thing
}
}}
```

complete project on [codesandbox.io](https://codesandbox.io/s/currying-flower-osk5n?file=/index.html)
THe complete docs are available in [this folder](https://github.com/tanay-pingalkar/replace.js/tree/main/docs)

## array and loops
Currently the loops are not well polished and may doest look clean. We will see array by making a todo list
- html
``` html
<input onchange="add(event)">
{{ 
  (arr)=>{
  let arre=[];
  arr.forEach((ele,i)=>{
    arre.push(`
    <p>${ele}</p>
    <button onclick="remove(${i})">remove</button>
    `)
  })
  return arre.join("")
  } 
}}
<script src="https://cdn.jsdelivr.net/gh/tanay-pingalkar/replace.js@v0.0.2/dist/bundle.min.js" type="text/javascript"></script>
<script src="main.js" type="text/javascript"></script>
```
- js
``` javascript
const arr=new Arr("arr");

function add(e){
  arr.push(e.target.value)
}

function remove(i){
  arr.splice(i,1)
}
```
And here you go.... <br>
![gif](https://github.com/tanay-pingalkar/replace.js/blob/main/example/Screencast%202021-04-22%2017%2011%2023.gif)
<br>Dont worry I will work on loops.
As you can see , to render array, you can so this
``` html
<h1>{{ arr }<h1>
<h1>{{ (arr)=>arr[0] }<h1>
```
```javascript
const arr=new Arr("arr")
arr.push("this is array")
```

## setting up on local machine

fork the repo and clone it <br>
run `yarn install` <br>
then `yarn build` <br>
got to `examples` and start index.html

## status
v0.0.3 upcoming features
- [ ] tested in jest
- [ ] object support
- [ ] es6 transformation (currently  esnext)
It will have a webpacked version,scopes and component based system soon. 

## contribution
this repo is open source and will live open source, contributers are highly welcome. You can contribute to this library by following ways
- report bugs or feature idea on github issue
- work on documentation
- contribute to direct source code

## philosophy
The main goal I have to acheive making this is to provide you reactive variables straight into html.It is inspired from vue and svelte. I have to keep it simple, lightweight and reactive. With a gentle learining curve.The name of the library tells the core of the library. The dom manipulation is very different than other.It just replace `{{ variable_name }}` by your given content in document.body.innerHTML but with some tweaks. Thats how it is reactive and you dont have getElementById every where.

