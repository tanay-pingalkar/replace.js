# `class Obj`
```
const obj = new Obj("obj",{
title:"a good title"
picture:{
  bigpic:"fberhfehfe.png",
  smallpic:"enfhefjig.png"
}
});

//set
obj.set(new object);

// key
obj.key("title","changed title")
obj.key("title") // return title

// nested keys
obj.key("picture.smallpic","new.png");
```

## display
``` html
<h1>{{ obj.title }}<h1>
<img src="{{ obj.picture.bigpic }}">
```
