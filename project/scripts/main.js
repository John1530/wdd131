// Current Year
const yearElement = document.querySelector("#currentyear");

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}

// Last Modified
const modifiedElement = document.querySelector("#lastModified");

if (modifiedElement) {
    modifiedElement.textContent = `Last Modified: ${document.lastModified}`;
}

// Aircraft Data

const aircraft = [
    {
        name: "Boeing 737",
        type: "Commercial Airliner",
        speed: 876,
        description: "One of the world's most popular commercial passenger aircraft."
    },
    {
        name: "F-35 Lightning II",
        type: "Multirole Fighter",
        speed: 1930,
        description: "A fifth-generation stealth fighter aircraft."
    },
    {
        name: "Airbus A350",
        type: "Wide-body Airliner",
        speed: 945,
        description: "A modern long-range commercial aircraft."
    }
];

// Function 1
function displayAircraftOfDay() {

    const aircraftContainer = document.querySelector("#aircraftOfDay");

    if (!aircraftContainer) {
        return;
    }

    const randomIndex = Math.floor(Math.random() * aircraft.length);

    const plane = aircraft[randomIndex];

    aircraftContainer.innerHTML = `
        <h3>${plane.name}</h3>
        <p><strong>Type:</strong> ${plane.type}</p>
        <p><strong>Maximum Speed:</strong> ${plane.speed} km/h</p>
        <p>${plane.description}</p>
    `;
}

// Function 2
function logAircraftNames() {

    const names = aircraft.map(plane => plane.name);

    console.log(names);
}

// Run functions when page loads

document.addEventListener("DOMContentLoaded", () => {
    displayAircraftOfDay();
    logAircraftNames();
});

function calculateLift(event) {

    event.preventDefault();

    const density = Number(document.querySelector("#density").value);
    const velocity = Number(document.querySelector("#velocity").value);
    const area = Number(document.querySelector("#area").value);
    const coefficient = Number(document.querySelector("#coefficient").value);

    const lift =
        0.5 *
        density *
        velocity *
        velocity *
        area *
        coefficient;

    const result = document.querySelector("#liftResult");

    if (lift > 10000) {

        result.innerHTML = `
            <h3>Lift Force</h3>
            <p>${lift.toFixed(2)} N</p>
            <p>High Lift Condition</p>
        `;

    } else {

        result.innerHTML = `
            <h3>Lift Force</h3>
            <p>${lift.toFixed(2)} N</p>
            <p>Low Lift Condition</p>
        `;
    }
}

const liftForm = document.querySelector("#liftForm");

if (liftForm) {
    liftForm.addEventListener("submit", calculateLift);
}

function saveFavoriteAircraft(event) {

    const aircraftName =
        event.target.getAttribute("data-aircraft");

    localStorage.setItem(
        "favoriteAircraft",
        aircraftName
    );

    displayFavoriteAircraft();
}

function displayFavoriteAircraft() {

    const favoriteContainer =
        document.querySelector("#favoriteAircraft");

    if (!favoriteContainer) {
        return;
    }

    const favorite =
        localStorage.getItem("favoriteAircraft");

    if (favorite) {

        favoriteContainer.innerHTML = `
            <h3>${favorite}</h3>
            <p>Your selected favorite aircraft.</p>
        `;

    } else {

        favoriteContainer.innerHTML = `
            <p>No favorite aircraft selected.</p>
        `;
    }
}

const favoriteButtons =
    document.querySelectorAll(".favorite-btn");

favoriteButtons.forEach(button => {
    button.addEventListener(
        "click",
        saveFavoriteAircraft
    );
});

displayFavoriteAircraft();

const exampleBtn = document.querySelector("#exampleBtn");

if (exampleBtn) {
    exampleBtn.addEventListener("click", () => {
        document.querySelector("#density").value = 1.22;
        document.querySelector("#velocity").value = 70;
        document.querySelector("#area").value = 16;
        document.querySelector("#coefficient").value = 1.2;
    });
}