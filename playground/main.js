let theme = "blackboard";
let innerH = `
<h1 style="color:{{ color }}">{{ title }}</h1>
<button onclick="gen()">generate</button>
`;
let innerjs = `
const random_hex_color_code = () => {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};
new Str("title","replacejs is cool")
const color=new Str("color",random_hex_color_code());

window.gen=()=>{
  color.set(random_hex_color_code())
}

`;

document.getElementById("html").value = innerH;
document.getElementById("js").value = innerjs;
window.onReplace = () => {
  document.getElementById("html").value = innerH;
  document.getElementById("js").value = innerjs;
  CodeMirror.fromTextArea(document.getElementById("html"), {
    lineNumbers: true,
    mode: "xml",
    theme: theme,
  });
  CodeMirror.fromTextArea(document.getElementById("js"), {
    lineNumbers: true,
    mode: "javascript",
    theme: theme,
  });
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
  if (theme === "blackboard") {
    theme = "base16-light";
  } else {
    theme = "blackboard";
  }
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
