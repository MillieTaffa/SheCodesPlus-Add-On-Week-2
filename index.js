// Los Angeles
setInterval(function () {
let losangeles = document.querySelector("#los-angeles");
let losangelesDate = losangeles.querySelector(".date");
let losangelesTime = losangeles.querySelector(".time");
let currentTimeLA = moment().tz("America/Los_Angeles");
losangelesDate.innerHTML = currentTimeLA.format("MMMM Do YYYY"); // Corrected to use currentTimeLA
losangelesTime.innerHTML = `${currentTimeLA.format('h:mm:ss')} <small>${currentTimeLA.format("A")}</small>`;
})

// Paris
setInterval(function () {
let paris = document.querySelector("#paris");
let parisDate = paris.querySelector(".date");
let parisTime = paris.querySelector(".time");
let currentTimeP = moment().tz("Europe/Paris");
parisDate.innerHTML = currentTimeP.format("MMMM Do YYYY"); // Corrected to use currentTimeP
parisTime.innerHTML = `${currentTimeP.format('h:mm:ss')} <small>${currentTimeP.format("A")}</small>`;

})