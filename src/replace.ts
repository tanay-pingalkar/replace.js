export const replace = (name: string, content: any) => {
  let html: string = window.initialHTML;
  window.variables.forEach((element, i) => {
    if (element.name === name) {
      html = html.replaceAll(`{{ ${name} }}`, content);
      window.variables[i].content = content;
    }
    html = html.replaceAll(`{{ ${element.name} }}`, element.content);
  });
  const reg = new RegExp(
    `\\{\\{\\s\\(${name}\\)=>{?[a-zA-Z0-9\\W]*?}?\\s\\}\\}`,
    "g"
  );
  const funcs = window.initialHTML.match(reg);
  if (funcs === null) {
    document.body.innerHTML = html;
    return content;
  }

  funcs.forEach((func) => {
    let onlyfunc = func.slice(2, func.length - 2);
    const res = eval(`const func=${onlyfunc};func("${content}")`);
    console.log(window.initialHTML.replaceAll(func, res));
    html = html.replaceAll(func, res);
  });
  document.body.innerHTML = html;
  return content;
};
