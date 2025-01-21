export default () => {
  const div = document.createElement("div");
  div.classList.add("contact-info");

  div.innerHTML = `
    <h2>Contact Us</h2>
    <p>123 Savory Lane, Flavor Heights, NY 10012 | 📞 (555) 999-9999 | 🌐 <a href="#">www.fake-site-name.com</a></p>
    <ul>
      <li href="#">Facebook</li> 
      <li href="#">Instagram</li> 
      <li href="#">Twitter</li>
    </ul>
  `;

  return div;
};
