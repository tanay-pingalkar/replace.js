# What is replace.js
Replace.js is a library for making reactive frontend. It can be very usefull if you are only using vanilla javascript and want features like react and vue in direct html. Currenly it is in rapid developement and you may find some drastic changes in core. It also have good perfomance. And i will try to make it more perfomant.

# How it works
Currenly there is no npm package for replace.js and no webpacked boilerplate. But you can use repository source code or v0.0.1 cdn `https://cdn.jsdelivr.net/gh/tanay-pingalkar/replace.js@v0.0.1/dist/bundle.min.js`. The way replace.js works internally is little bit different from dom manipulation, it acctually replaces all your variable in html by the given/resolved value. The main function in replace.js is  `replace()` it self. Let see how you can get started with it.

## index.html
``` html
<body>
  <h1>{{ my_variable }}</h1>
  <scriptsrc="https://cdn.jsdelivr.net/gh/tanay-pingalkar/replace.js@v0.0.1/dist/bundle.min.js" ></script>
  <script src="https://cdn.jsdelivr.net/gh/tanay-pingalkar/replace.js@v0.0.1/dist/bundle.min.js"></script>
<body>
```

## main.js
``` javascript
window.variable.push({
name:"",
content:"",
resolved:[]
})
replace("my_variable","this is what i want to tell you");
```

this will work fine, but it doest look soo good lets make it look good.

## good main.js
``` javascript
const my_varable=new Str("my_variable", "this is my variable");
```
this is better. `class Str` is a datatype in replace.js. There are more variables like `class Bool`, `class Arr` and can be used as our need.

## there is special for every function/feature in [docs](https://github.com/tanay-pingalkar/replace.js/edit/main/docs/) folder.
