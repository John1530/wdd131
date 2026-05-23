// FOOTER DYNAMIC CONTENT

const currentYear = new Date().getFullYear();

document.getElementById("currentYear").textContent =
    currentYear;

document.getElementById("lastModified").textContent =
    document.lastModified;



// STATIC WEATHER VALUES

const temperature = 32;
const windSpeed = 12;



// WIND CHILL FUNCTION

function calculateWindChill(temp, speed) {

    return (
        13.12 +
        (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16))
    ).toFixed(1);
}



// DISPLAY WIND CHILL

let windChill = "N/A";

if (temperature <= 10 && windSpeed > 4.8) {

    windChill =
        `${calculateWindChill(temperature, windSpeed)} °C`;
}

document.getElementById("windchill").textContent =
    windChill;