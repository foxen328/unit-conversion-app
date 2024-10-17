/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/
//let inputNumber = 20;
let inputNumber = document.getElementById("input-field").value;
//inputNumber = Number(inputNumber);
const convertBtn = document.getElementById("convert-btn");
const lengthInsert = document.getElementById("length");
const volumeInsert = document.getElementById("volume");
const massInsert = document.getElementById("mass");

//inputNumber = inputNumber - Testing reassignment to get the inputted value to function and allow a value to be passed into functions
//console.log(inputNumber)

const feet = 3.281;
const meter = 1;
const liter = 1;
const gallon = 0.264;
const kilogram = 1;
const pound = 2.204;

//Dark mode toggle variable
let darkMode = document.getElementById("dark-mode");

// convertBtn.addEventListener("click", function () {


convertBtn.addEventListener("click", function () {

  length()
  volume()
  mass()

})

function length() {
  let inputNumber = document.getElementById("input-field").value;
  let metersToFeet = inputNumber * feet
  let feetToMeters = inputNumber / feet
  let contents = `${inputNumber} meters = ${metersToFeet.toFixed(3)} feet | ${inputNumber} feet = ${feetToMeters.toFixed(3)} meters`
  lengthInsert.innerHTML = contents
}

function volume() {
  let inputNumber = document.getElementById("input-field").value;
  let kilosToPounds = inputNumber * pound
  let poundsToKilos = inputNumber / pound
  let contents = `${inputNumber} kilos = ${kilosToPounds.toFixed(3)} pounds | ${inputNumber} pounds = ${poundsToKilos.toFixed(3)} kilos`
  volumeInsert.innerHTML = contents
}

function mass() {
  let inputNumber = document.getElementById("input-field").value;
  let kilosToPounds = inputNumber * pound
  let poundsToKilos = inputNumber / pound
  let contents = `${inputNumber} kilos = ${kilosToPounds.toFixed(3)} pounds | ${inputNumber} pounds = ${poundsToKilos.toFixed(3)} kilos`
  massInsert.innerHTML = contents
}


//Flow chat of what I want to do
// So essentially, I want to store the value from the input field (done)

//From there, we want to create conversions below first before we doing anything else


// darkMode.addEventListener("click", function () {

//   let dark = document.body;
//   dark.classList.toggle("dark-mode")

// })

