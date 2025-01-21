import createHome from "./home.js";
import createMenu from "./menu.js";
import createContact from "./contact.js";

const content = document.querySelector("#content");
content.appendChild(createHome());

document
  .querySelectorAll(".btn")
  .forEach((btn) => btn.addEventListener("click", handleClick));

function handleClick(event) {
  const buttonName = event.target.innerText;
  content.innerHTML = "";

  switch (buttonName) {
    case "Home":
      content.appendChild(createHome());
      break;
    case "Menu":
      content.appendChild(createMenu());
      break;
    case "Contact":
      content.appendChild(createContact());
      break;
    default:
      content.appendChild(createHome());
      break;
  }
}
