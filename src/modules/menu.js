import "../style/menu.css";
import caesarSaladImage from "../assets/images/caesar-salad.jpg";
import cheeseburgerImage from "../assets/images/cheeseburger.jpg";
import chocolateImage from "../assets/images/chocolate-lava-cake.jpg";
import margheritaImage from "../assets/images/margherita-pizza.jpg";

const menuItems = [
  {
    title: "Margherita Pizza",
    price: "U$ 15.00",
    description:
      "Classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.",
    image: margheritaImage,
    credit: {
      text: "Sarang Pande",
      link: "https://unsplash.com/@chulbulpande_jiiii?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      imageLink:
        "https://unsplash.com/photos/pizza-with-cheese-and-pepperoni-A9oUGvA4gR8?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
  },
  {
    title: "Cheeseburger",
    price: "U$ 12.00",
    description:
      "Juicy grilled beef patty with melted cheese, lettuce, tomato, and a toasted sesame seed bun.",
    image: cheeseburgerImage,
    credit: {
      text: "Nathan Dumlao",
      link: "https://unsplash.com/@nate_dumlao?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      imageLink:
        "https://unsplash.com/photos/burger-with-cheese-and-lettuce-BqH1t46q-78?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
  },
  {
    title: "Caesar Salad",
    price: "U$ 10.00",
    description:
      "Crisp romaine lettuce tossed with Caesar dressing, croutons, and grated Parmesan cheese.",
    image: caesarSaladImage,
    credit: {
      text: "Alpha Rad",
      link: "https://unsplash.com/@alpharad?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      imageLink:
        "https://unsplash.com/photos/a-metal-container-filled-with-a-variety-of-food-HiTGgZ3YG_4?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
  },
  {
    title: "Chocolate Lava Cake",
    price: "U$ 8.00",
    description:
      "Warm chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream.",
    image: chocolateImage,
    credit: {
      text: "Mike Meeks",
      link: "https://unsplash.com/@mikemeex?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
      imageLink:
        "https://unsplash.com/photos/close-up-photography-of-cupcakes-zk-fclJdGas?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash",
    },
  },
];

export default () => {
  const div = document.createElement("div");
  div.classList.add("menu-info");

  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  div.appendChild(heading);

  menuItems.forEach((item) => {
    const menuItem = document.createElement("div");
    menuItem.classList.add("menu-item");

    const itemTitle = document.createElement("h2");
    itemTitle.textContent = item.title;
    menuItem.appendChild(itemTitle);

    const itemPrice = document.createElement("span");
    itemPrice.textContent = item.price;
    menuItem.appendChild(itemPrice);

    const itemDescription = document.createElement("p");
    itemDescription.textContent = item.description;
    menuItem.appendChild(itemDescription);

    const imageElement = document.createElement("img");
    imageElement.src = item.image;
    menuItem.appendChild(imageElement);

    const creditDiv = document.createElement("div");
    creditDiv.classList.add("image-credit");
    creditDiv.innerHTML = `
      <p>Photo by <a href="${item.credit.link}" target="_blank">${item.credit.text}</a> on <a href="${item.credit.imageLink}" target="_blank">Unsplash</a></p>
    `;
    menuItem.appendChild(creditDiv);

    div.appendChild(menuItem);
  });

  return div;
};
