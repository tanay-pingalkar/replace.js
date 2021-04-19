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
