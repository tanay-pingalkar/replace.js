import { replaceAllRegex } from "./regex";

export const init = (): void => {
  document.body.innerHTML = window.initialHTML.replaceAll(replaceAllRegex, "");
};
