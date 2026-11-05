const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");
menuButton.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  menuButton.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
  nav.classList.remove("open");
  menuButton.setAttribute("aria-expanded", "false");
}));
document.getElementById("year").textContent = new Date().getFullYear();
const email = window.VENUE_DESK_CONFIG && window.VENUE_DESK_CONFIG.email;
const emailLink = document.getElementById("email-link");
if (email && email !== "YOUR_EMAIL_ADDRESS" && /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/.test(email)) {
  emailLink.href = `mailto:${email}`;
  emailLink.parentElement.querySelector("small").textContent = email;
}