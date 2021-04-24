import { replaceAllRegex } from "./regex";

/*
replace all variable to empty string 
*/
export const init = (): void => {
  document.body.innerHTML = window.initialHTML.replace(replaceAllRegex, "");
};
