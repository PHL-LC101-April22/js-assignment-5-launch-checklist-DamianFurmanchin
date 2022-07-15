require("isomorphic-fetch");

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
  const missionTarget = document.getElementById("missionTarget");
     missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
            };

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if(!isNaN(testInput)) {
        return "Is a Number";
    } else if (isNaN(testInput)){
        return "Not a Number";
    }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    let pilotStatus = document.getElementById('pilotStatus');
    let copilotStatus = document.getElementById('copilotStatus');
    let fuelStatus = document.getElementById('fuelStatus');
    let launchStatus = document.getElementById('launchStatus');
    let cargoStatus = document.getElementById('cargoStatus');

      if (validateInput(pilot) === "" || validateInput(copilot) === "" || validateInput(fuelLevel) === "" || validateInput(cargoLevel) === "") {
        alert("All fields are required!");
        list.style.visibilty="hidden";
      } else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number" || validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
        alert("Enter valid information for each field!");
         list.style.visibilty="hidden";
      } else {
        
        list.style.visibility = "visible";
        pilotStatus.innerHTML = `Pilot ${pilot} is ready for launch.`;
        copilotStatus.innerHTML = `Copilot ${copilot} is ready for launch.`;
      }  
        
        if (fuelLevel < 10000) {
          fuelStatus.innerHTML += "There is not enough fuel for the journey.";
          list.style.visibility = "visible";
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatus.style.color = "red";
        }
         else if (cargoLevel > 10000) {
          cargoStatus.innerHTML += "The shuttle is too heavy to launch.";
          list.style.visibility = "visible";
          launchStatus.innerHTML = "Shuttle not ready for launch";
          launchStatus.style.color = "red";
        } else {
            launchStatus.innerHTML = "Shuttle ready for launch!";
            launchStatus.style.color = "green";
            list.style.visibility = "visible";
            fuelStatus.innerHTML = "Fuel check passes.";
            cargoStatus.innerHTML = "Cargo check passed.";
        }
    }
  
  
async function myFetch() {
  let planetsReturned;
    planetsReturned = await fetch('https://handlers.education.launchcode.org/static/planets.json').then( function(response) {
            
      return response.json()
    });

    return planetsReturned;
}


function pickPlanet(planets) {
  let randomPlanet = planets[Math.floor(Math.random() * planets.length)];
    return randomPlanet;
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet;
module.exports.myFetch = myFetch;
