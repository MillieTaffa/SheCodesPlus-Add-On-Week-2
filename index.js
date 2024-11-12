// Update the time for cities (like Los Angeles and Paris)
function updateTime() {
    let losangeles = document.querySelector("#los-angeles");
    if (losangeles) {
        let losangelesDate = losangeles.querySelector(".date");
        let losangelesTime = losangeles.querySelector(".time");
        let currentTimeLA = moment().tz("America/Los_Angeles");
        losangelesDate.innerHTML = currentTimeLA.format("MMMM Do YYYY");
        losangelesTime.innerHTML = `${currentTimeLA.format('h:mm:ss')} <small>${currentTimeLA.format("A")}</small>`;
    }

    let paris = document.querySelector("#paris");
    if (paris) {
        let parisDate = paris.querySelector(".date");
        let parisTime = paris.querySelector(".time");
        let currentTimeP = moment().tz("Europe/Paris");
        parisDate.innerHTML = currentTimeP.format("MMMM Do YYYY");
        parisTime.innerHTML = `${currentTimeP.format('h:mm:ss')} <small>${currentTimeP.format("A")}</small>`;
    }

    let belgium = document.querySelector("#belgium");
    if (belgium) {
        let belgiumDate = belgium.querySelector(".date");
        let belgiumTime = belgium.querySelector(".time");
        let currentTimeB = moment().tz("Europe/Belgium");
        belgiumDate.innerHTML = currentTimeB.format("MMMM Do YYYY");
        belgiumTime.innerHTML = `${currentTimeB.format('h:mm:ss')} <small>${currentTimeB.format("A")}</small>`;
    }
};

// Function to update city time and display it
function updateCity(event) {
    let cityTimeZone = event.target.value;
    if (cityTimeZone === "current") {
        cityTimeZone = moment.tz.guess(); // Detect current time zone
    }

    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);

    // Check if the city already exists and update its content
    let cityElement = document.querySelector(`#${cityName.toLowerCase()}`);
    if (cityElement) {
        let cityDate = cityElement.querySelector(".date");
        let cityTimeElement = cityElement.querySelector(".time");
        cityDate.innerHTML = cityTime.format("MMMM Do YYYY");
        cityTimeElement.innerHTML = `${cityTime.format('h:mm:ss')} <small>${cityTime.format("A")}</small>`;
    } else {
        // If the city doesn't exist, create it dynamically
        let citiesElement = document.querySelector("#cities");
        citiesElement.innerHTML = `
            <div class="city" id="${cityName.toLowerCase()}">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format('h:mm:ss')} <small>${cityTime.format("A")}</small></div>
            </div>`;
    }
}

// Initialize time updates for default cities
updateTime();
setInterval(updateTime, 1000); // Keep the interval running to update the time

// Add event listener to the dropdown
let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);
