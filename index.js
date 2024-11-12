// Los Angeles
function updateTime() {
    let losangeles = document.querySelector("#los-angeles");
    let losangelesDate = losangeles.querySelector(".date");
    let losangelesTime = losangeles.querySelector(".time");
    let currentTimeLA = moment().tz("America/Los_Angeles");
    losangelesDate.innerHTML = currentTimeLA.format("MMMM Do YYYY");
    losangelesTime.innerHTML = `${currentTimeLA.format('h:mm:ss')} 
    <small>${currentTimeLA.format("A")}</small>`;

    // Paris
    let paris = document.querySelector("#paris");
    let parisDate = paris.querySelector(".date");
    let parisTime = paris.querySelector(".time");
    let currentTimeP = moment().tz("Europe/Paris");
    parisDate.innerHTML = currentTimeP.format("MMMM Do YYYY");
    parisTime.innerHTML = `${currentTimeP.format('h:mm:ss')} 
    <small>${currentTimeP.format("A")}</small>`;
};

function updateCity(event) {
    let cityTimeZone = event.target.value;
    let cityName = cityTimeZone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimeZone);
    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = ` 
    <div>
    <h2>${cityName}</h2>
    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format('h:mm:ss')}  <small>${cityTime.format("A")}</small></div>`
}

updateTime();
setInterval(updateTime, 1000)

let citiesSelectElement = document.querySelector("#city");

citiesSelectElement.addEventListener("change", updateCity)