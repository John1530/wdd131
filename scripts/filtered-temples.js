// Footer Dynamic Content

const year = new Date().getFullYear();

document.getElementById("currentYear").textContent = year;

document.getElementById("lastModified").textContent = document.lastModified;

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

const temples = [
  {
    templeName: "Kirtland Temple",
    location: "Kirtland, Ohio, United States",
    dedicated: "1836, March, 27",
    area: 15000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/kirtland-temple/kirtland-temple-1275-main.jpg"
  },
  {
    templeName: "Nauvoo Temple",
    location: "Nauvoo, Illinois, United States",
    dedicated: "1846, April, 3",
    area: 54000,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/nauvoo-illinois-temple/nauvoo-illinois-temple-50576-main.jpg"
  },
  {
    templeName: "Salt Lake Temple",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 382207,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
  },
  {
    templeName: "London England Temple",
    location: "London, England",
    dedicated: "1955, October, 15",
    area: 42652,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/london-england-temple/london-england-temple-56886-main.jpg"
  },
  {
    templeName: "Preston England Temple",
    location: "Preston, England",
    dedicated: "1998, June, 7",
    area: 69630,
    imageUrl:
    "https://churchofjesuschristtemples.org/assets/img/temples/preston-england-temple/preston-england-temple-45357-main.jpg"
  },
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },
  // Add more temple objects here...
];

const templeContainer = document.querySelector("#temple-container");

function createTempleCard(temple) {

    const card = document.createElement("section");
    card.classList.add("card");

    const name = document.createElement("h3");
    name.textContent = temple.templeName;

    const location = document.createElement("p");
    location.textContent = `Location: ${temple.location}`;

    const dedicated = document.createElement("p");
    dedicated.textContent = `Dedicated: ${temple.dedicated}`;

    const area = document.createElement("p");
    area.textContent = `Area: ${temple.area.toLocaleString()} sq ft`;

    const image = document.createElement("img");
    image.src = temple.imageUrl;
    image.alt = temple.templeName;
    image.loading = "lazy";

    card.appendChild(name);
    card.appendChild(location);
    card.appendChild(dedicated);
    card.appendChild(area);
    card.appendChild(image);

    templeContainer.appendChild(card);
}

function displayTemples(templeList) {

    templeContainer.innerHTML = "";

    templeList.forEach(function (temple) {
        createTempleCard(temple);
    });
}

// Show all temples when page loads
displayTemples(temples);


document.querySelector("#home").addEventListener("click", function(event) {
    event.preventDefault();
    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", function(event) {
    event.preventDefault();

    const oldTemples = temples.filter(function(temple) {
        return Number(temple.dedicated.substring(0, 4)) < 1900;
    });

    displayTemples(oldTemples);
});

document.querySelector("#new").addEventListener("click", function(event) {
    event.preventDefault();

    const newTemples = temples.filter(function(temple) {
        return Number(temple.dedicated.substring(0, 4)) > 2000;
    });

    displayTemples(newTemples);
});

document.querySelector("#large").addEventListener("click", function(event) {
    event.preventDefault();

    const largeTemples = temples.filter(function(temple) {
        return temple.area > 90000;
    });

    displayTemples(largeTemples);
});

document.querySelector("#small").addEventListener("click", function(event) {
    event.preventDefault();

    const smallTemples = temples.filter(function(temple) {
        return temple.area < 10000;
    });

    displayTemples(smallTemples);
});