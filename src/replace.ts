export const replace = (name: string, content: any) => {
  const searchKey = `{{ ${name} }}`;
  document.body.innerHTML = window.initialHTML.replaceAll(searchKey, content);
  return content;
};
