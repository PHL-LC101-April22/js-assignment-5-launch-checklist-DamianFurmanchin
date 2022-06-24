// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
 if (pilotName.value === "" || copilotName.value === "") {
alert ("Empty");
 } else if (isNaN(fuelLevel) === false || isNaN(cargoMass) === false) {
alert ("Is a number.");
} else if (isNaN(fuelLevel) === true || isNaN(cargoMass) === true) {
    alert ("Is not a number.");
 }
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    window.addEventListener("load", function() {
        let form = document.querySelector("testForm");
        form.addEventListener("submit", function(event) {
          let pilot = document.querySelector("input[name=pilotName]");
          let copilot = document.querySelector("input[name=copilotName]");
          let fuel = document.querySelector("input[name=fuelLevel]");
          let cargo = document.querySelector("input[name=cargoMass]");
            if (validateInput(pilot)=== "" || validateInput(copilot)=== "" || validateInput(fuel)=== "" || validateInput(fuel)=== "" ) {
            alert("All fields are required!");
            event.preventDefault();
            }
        });        
});
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
