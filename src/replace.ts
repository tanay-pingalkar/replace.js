export const replace = (name: string, content: any) => {
  const searchKey = `{{ ${name} }}`;
  document.body.innerHTML = window.initialHTML.replaceAll(searchKey, content);

  const funcs = window.initialHTML.match(
    /\{\{\s\(varia\)=>{[a-zA-Z0-9\W]*}\s\}\}/g
  );
  if (funcs === null) return content;

  funcs.forEach((func) => {
    let onlyfunc = func.slice(2, func.length - 2);
    console.log(func);
    const res = eval(`const func=${onlyfunc};func("${content}")`);
    window.initialHTML = window.initialHTML.replace(func, res);
  });
};
