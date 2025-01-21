export default () => {
  const div = document.createElement("div");
  div.classList.add("menu-info");
  div.innerHTML = "<h1>Menu</h1>";

  const menuItem = document.createElement("div");
  menuItem.classList.add("menu-item");
  menuItem.innerHTML = `
    <h2>Margherita Pizza</h2>
    <span>U$ 15.00</span>
    <p>
      Classic Italian pizza topped with fresh tomatoes, mozzarella cheese, and basil leaves.
    </p>
    <img src="https://via.placeholder.com/150" alt="Margherita Pizza"></img>
  `;

  div.appendChild(menuItem);

  const menuItem2 = document.createElement("div");
  menuItem2.classList.add("menu-item");
  menuItem2.innerHTML = `
    <h2>Cheeseburger</h2>
    <span>U$ 12.00</span>
    <p>
      Juicy grilled beef patty with melted cheese, lettuce, tomato, and a toasted sesame seed bun.
    </p>
    <img src="https://via.placeholder.com/150" alt="Cheeseburger">
  `;

  div.appendChild(menuItem2);

  const menuItem3 = document.createElement("div");
  menuItem3.classList.add("menu-item");
  menuItem3.innerHTML = `
    <h2>Caesar Salad</h2>
    <span>U$ 10.00</span>
    <p>
      Crisp romaine lettuce tossed with Caesar dressing, croutons, and grated Parmesan cheese.
    </p>
    <img src="https://via.placeholder.com/150" alt="Caesar Salad">
  `;

  div.appendChild(menuItem3);

  const menuItem4 = document.createElement("div");
  menuItem4.classList.add("menu-item");
  menuItem4.innerHTML = `
    <h2>Chocolate Lava Cake</h2>
    <span>U$ 8.00</span>
    <p>
      Warm chocolate cake with a gooey molten center, served with a scoop of vanilla ice cream.
    </p>
    <img src="https://via.placeholder.com/150" alt="Chocolate Lava Cake">
  `;

  div.appendChild(menuItem4);

  return div;
};
