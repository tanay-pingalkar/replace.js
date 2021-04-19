export const replace = (name: string, content: any) => {
  const searchKey = `{{ ${name} }}`;
  // @ts-ignore
  document.body.innerHTML = window.initialHTML.replaceAll(searchKey, content);
  return content;
};
