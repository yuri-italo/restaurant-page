export default () => {
  const createSection = (title, content) => {
    const section = document.createElement("div");
    section.classList.add(title.toLowerCase().replace(/\s/g, "-")); // e.g., "open-hours"

    const sectionTitle = document.createElement("h2");
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);

    section.innerHTML += content;
    return section;
  };

  const div = document.createElement("div");
  div.classList.add("restaurant-info");

  // Title Section
  div.innerHTML = `
    <h1>The Flavor Hub</h1>
    <div class="description">
      <p>Welcome to <strong>The Flavor Hub</strong>, where every bite is a journey and every meal is an experience! Nestled in the heart of the city, The Flavor Hub is a culinary haven that brings together the best flavors from around the world. From sizzling starters to decadent desserts, every dish is crafted with passion, precision, and a touch of magic.</p>
      <p>Come hungry, leave happy—because at The Flavor Hub, flavor isn’t just in the name; it’s in everything we do.</p>
    </div>
  `;

  // Open Hours Section
  const openHoursContent = `
    <ul>
      <li><strong>Monday – Thursday:</strong> 11:00 AM – 9:00 PM</li>
      <li><strong>Friday – Saturday:</strong> 11:00 AM – 11:00 PM</li>
      <li><strong>Sunday:</strong> 12:00 PM – 8:00 PM</li>
    </ul>
  `;
  div.appendChild(createSection("Open Hours", openHoursContent));

  // Location Section
  const locationContent = `
    <p>123 Savory Lane, Flavor Heights, NY 10012</p>
    <p>
      Nestled in the vibrant neighborhood of Flavor Heights, The Flavor Hub is conveniently located just minutes from Central Park and accessible by subway, bus, or a leisurely stroll.
    </p>
  `;
  div.appendChild(createSection("Location", locationContent));

  return div;
};
