## `class Str`
``` javascript
const vari=new Str("my_variable" /* variable name */, "default value");

// set
vari.set("new value");

// content
console.log(varia.content); //value of  varia

// if elif else
varia.if("good","bad"); // checks if varia.content is equal to 1st argument and if true then change value to bad
varia.elif("bad","good"); // checks if its above argument is false and if false then checks for if varia.content is equal to 1st arg and if true change value to bad  
varia.else("none); // if everything is false then change value to 1st arg.
// 2nd argument in if,elif,else can be string or a function as a callback
varia.if("good",()=>{
console.log("this is how callback works if the condition is true);
varia.set("bad);
});

// slice replace replace all
varia.slice(start: number, end?: number)
varia.replace(keyword: string, content: string);
varia.replaceAll(keyword: string, content: string) ;



```
