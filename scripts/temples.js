// Set Current Year and Last Modified Date
document.getElementById("currentyear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Modification: " + document.lastModified;

// Mobile Menu Toggle
const menuButton = document.getElementById("menu-button");
const navMenu = document.getElementById("nav-menu");

menuButton.addEventListener("click", () => {
    navMenu.classList.toggle("open");

    // Change button text between ☰ and ❌
    if (navMenu.classList.contains("open")) {
        menuButton.textContent = "❌"; // Change to close button
    } else {
        menuButton.textContent = "☰"; // Change back to menu button
    }
});