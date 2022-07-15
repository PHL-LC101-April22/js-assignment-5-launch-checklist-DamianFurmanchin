const { pickPlanet } = require("./scriptHelper");

window.addEventListener("load", function() {
let form = document.querySelector("form");
let list= document.getElementById("faultyItems");
list.style.visibility = "hidden"
  
   form.addEventListener("submit", function (event) {
    event.preventDefault();
    let list = document.getElementById('faultyItems');
    let pilot = document.querySelector("input[name=pilotName]").value;
    let copilot = document.querySelector("input[name=copilotName]").value;
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value;
    let cargoLevel = document.querySelector("input[name=cargoMass]").value;
    
    formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel)
   });

 let listedPlanets;
   let listedPlanetsResponse = myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       let planet = pickPlanet(listedPlanets);
       let name = planet.name;
       let diameter = planet.diameter;
       let star = planet.star;
       let distance = planet.distance;
       let imageUrl = planet.image;
       let moons = planet.moons;
       addDestinationInfo(document, name, diameter, star, distance, imageUrl, moons);
   });
   

}); 
