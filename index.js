/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
const insertedValue = 20;
const inputNumber = document.getElementById("input-field");
const convertBtn = document.getElementById("convert-btn");
const test = document.getElementById("return-value-three")

const feet = 3.281;
const meter = 1;
const liter = 1;
const gallon = 0.264;
const kilogram = 1;
const pound = 2.204;

// convertBtn.addEventListener("click", function () {

// })

// function feetToMeters() {

// }

// function metersToFeet() {

// }

// function litersToGallon() {

// }

// function gallonsToLiters() {

// }

// function kilogramToPound() {

// }

function poundToKilogram() {
  let result = insertedValue * pound
  return result.toFixed(3)
}
convertBtn.addEventListener("click", function{


})


//Flow chat of what I want to do
// So essentially, I want to store the value from the input field (done)

//From there, we want to create conversions below first before we doing anything else

