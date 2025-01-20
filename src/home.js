export default () => {
  const homeDiv = document.createElement("div");
  homeDiv.classList.add("tab", "home");

  // Title
  const title = document.createElement("h1");
  title.innerHTML = "The Flavor Hub";
  homeDiv.appendChild(title);

  // Restaurant description
  const description = document.createElement("div");
  description.classList.add("description");

  const descriptionP = document.createElement("p");
  descriptionP.innerHTML =
    "Welcome to <strong>The Flavor Hub</strong>, where every bite is a journey and every meal is an experience! Nestled in the heart of the city, The Flavor Hub is a culinary haven that brings together the best flavors from around the world. From sizzling starters to decadent desserts, every dish is crafted with passion, precision, and a touch of magic.";

  const descriptionP2 = document.createElement("p");
  descriptionP2.innerHTML =
    "Come hungry, leave happy—because at The Flavor Hub, flavor isn’t just in the name; it’s in everything we do.";

  description.appendChild(descriptionP);
  description.appendChild(descriptionP2);

  homeDiv.appendChild(description);

  // Restaurant Open Hours
  const openHours = document.createElement("div");
  openHours.classList.add("hours");

  const openHoursTitle = document.createElement("h2");
  openHoursTitle.innerHTML = "Open Hours";
  openHours.appendChild(openHoursTitle);

  const list = document.createElement("ul");
  const item1 = document.createElement("li");
  item1.innerHTML = "<strong>Monday – Thursday:</strong> 11:00 AM – 9:00 PM";

  const item2 = document.createElement("li");
  item2.innerHTML =
    "<li><strong>Friday – Saturday:</strong> 11:00 AM – 11:00 PM</li>";

  const item3 = document.createElement("li");
  item3.innerHTML = "<li><strong>Sunday:</strong> 12:00 PM – 8:00 PM</li>";

  list.appendChild(item1);
  list.appendChild(item2);
  list.appendChild(item3);
  openHours.appendChild(list);

  homeDiv.appendChild(openHours);

  // Restaurant Location
  const location = document.createElement("div");
  location.classList.add("location");

  const locationTitle = document.createElement("h2");
  locationTitle.innerHTML = "Location";
  location.appendChild(locationTitle);

  const locationInfo = document.createElement("div");
  locationInfo.classList.add("location-info");

  const locationSpan = document.createElement("span");
  locationSpan.innerHTML =
    "<span>123 Savory Lane, Flavor Heights, NY 10012</span>";

  const locationSpan2 = document.createElement("span");
  locationSpan2.innerHTML = "<span>📞 (555) 999-9999</span>";

  const locationSpan3 = document.createElement("span");
  locationSpan3.innerHTML =
    '<span>🌐 <a href="#">www.theflavorhub.com</a></span>';

  locationInfo.appendChild(locationSpan);
  locationInfo.appendChild(locationSpan2);
  locationInfo.appendChild(locationSpan3);

  location.appendChild(locationInfo);

  const locationP = document.createElement("p");
  locationP.innerHTML =
    "Nestled in the vibrant neighborhood of Flavor Heights, The Flavor Hub is conveniently located just minutes from Central Park and accessible by subway, bus, or a leisurely stroll";

  location.appendChild(locationP);

  homeDiv.appendChild(location);

  return homeDiv;
};
