// Mobile Menu Toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    // Change button text between ☰ and ❌
    menuButton.textContent = navMenu.classList.contains("open") ? "❌" : "☰";
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    navMenu.classList.remove("open");
    menuButton.textContent = "☰";
  }
});

document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;