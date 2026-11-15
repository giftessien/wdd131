const currentYear = new Date().getFullYear();
document.querySelector("#currentyear").textContent = currentYear;

document.querySelector("#lastModified").textContent =
    document.lastModified;

const temperature = 28;
const windSpeed = 12;

function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) -
        (11.37 * Math.pow(speed, 0.16)) +
        (0.3965 * temp * Math.pow(speed, 0.16));
}

document.querySelector("#temperature").textContent =
    `${temperature}°C`;

document.querySelector("#wind").textContent =
    `${windSpeed} km/h`;

if (temperature <= 10 && windSpeed > 4.8) {
    const windChill = calculateWindChill(temperature, windSpeed);

    document.querySelector("#windchill").textContent =
        `${windChill.toFixed(1)}°C`;
} else {
    document.querySelector("#windchill").textContent = "N/A";
}
