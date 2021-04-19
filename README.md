# Replace.js

## a lightweight reactive frontend library

![logo](https://github.com/tanay-pingalkar/replace.js/blob/main/example/logo.svg)

## setup

fork the repo and clone it <br>
run `yarn install` <br>
then `yarn build` <br>
got to `examples` and start index.html

## index.html

```html
<body>
  <h1 class="{{ var }}">{{ var }}</h1>
  <button onclick="clicko()" class="{{ var }}">this is {{ var }}</button>
  <script src="https://cdn.jsdelivr.net/gh/tanay-pingalkar/replace.js@latest/dist/bundle.js" type="text/javascript"></script>
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

![video](https://github.com/tanay-pingalkar/replace.js/blob/37caf7c52c3ecce60d7fed25bc55a1f5f5d12852/Screencast%202021-04-19%2011%2033%2032.gif)

## conditions
let see one more example, lets make a random user generator
- html
``` html
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
    <script src="https://cdn.jsdelivr.net/gh/tanay-pingalkar/replace.js@latest/dist/bundle.js" type="text/javascript"></script>
    <script src="main.js" type="text/javascript"></script>
  </body>
```
- javascript
``` javascript
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
thats it....<br>
as you see
``` javascript
{{ 
  (profile_photo)=>(profile_photo==='loading') ? './logo.svg' : profile_photo
}}
```
this is how conditions works in replace.js

```javscript
{{
(name_of_var)=>{
\\ can do any thing
}
}}
```
