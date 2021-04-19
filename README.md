# replace.js
a lightweight reactive frontend library

## index.html
``` html
<body>
    <h1 class="{{ var }}">{{ var }}</h1>
    <button onclick="clicko()" class="{{ var }}">this is {{ var }}</button>
    <script src="../dist/bundle.js" type="text/javascript"></script>
    <script src="main.js" type="text/javascript"></script>
  </body>
```
## main.js
``` javascript
const varia = new Str("var", "good");

function clicko() {
  varia.if("good", "bad");
  varia.elif("bad", "good");
}
```

## style.css
``` css
.good {
  color: blue;
}
.bad {
  color: red;
}
```

## voila
