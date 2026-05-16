// Footer Dynamic Content


const year = new Date().getFullYear();

document.getElementById("currentYear").textContent = year;

document.getElementById("lastModified").textContent =

document.lastModified;

// Hamburger Menu

const menuButton = document.querySelector("#menu-button");
const nav = document.querySelector("nav");

nav.classList.add("hide");

menuButton.addEventListener("click", () => {
    nav.classList.toggle("hide");

    if (nav.classList.contains("hide")) {
        menuButton.textContent = "☰";
    } else {
        menuButton.textContent = "✖";
    }
});