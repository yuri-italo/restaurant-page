import "./style/reset.css";
import "./style/styles.css";

import createHome from "./modules/home.js";
import createMenu from "./modules/menu.js";
import createContact from "./modules/contact.js";

const content = document.querySelector("#content");
content.appendChild(createHome());

document
  .querySelectorAll(".btn")
  .forEach((btn) => btn.addEventListener("click", handleClick));

function handleClick(event) {
  const buttonName = event.target.innerText;
  content.innerHTML = "";

  switch (buttonName) {
    case "HOME":
      content.appendChild(createHome());
      break;
    case "MENU":
      content.appendChild(createMenu());
      break;
    case "CONTACT":
      content.appendChild(createContact());
      break;
    default:
      content.appendChild(createHome());
      break;
  }
}
