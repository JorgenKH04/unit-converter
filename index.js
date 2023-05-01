/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
20 meters = 65.616 feet | 20 feet = 6.096 meters
20 liters = 5.284 gallons | 20 gallons = 75.708 liters
20 kilos = 44.092 pounds | 20 pounds = 9.072 kilos
*/
const lengthInput = document.querySelector("#length-input");
const convertBtn = document.querySelector("#convert-btn");
const lengthOutput = document.querySelector("#length-output");
const volumeOutput = document.querySelector("#volume-output");
const massOutput = document.querySelector("#mass-output");
console.log(lengthInput.innerHTML);

convertBtn.addEventListener("click", function () {
  let input = Number(lengthInput.value);
  if (input) {
    lengthOutput.textContent = `${input} meters = ${convertMeter(
      input
    )} feet | ${input} feet = ${convertFeet(input)} meters`;
    volumeOutput.textContent = `${input} liters = ${convertLiter(
      input
    )} gallons | ${input} gallons = ${convertGallon(input)} liters`;
    massOutput.textContent = `${input} kilos = ${convertKilos(
      input
    )} pounds | ${input} pounds = ${convertPounds(input)} kilos`;
  } else {
    console.log("Input field needs a numerical value");
  }
});

function convertMeter(l) {
  return (l * 3.2808399).toFixed(3);
}

function convertFeet(l) {
  return (l / 3.2808399).toFixed(3);
}

function convertLiter(v) {
  return (v * 0.264172052).toFixed(3);
}

function convertGallon(v) {
  return (v / 0.264172052).toFixed(3);
}

function convertKilos(w) {
  return (w * 2.20462262).toFixed(3);
}

function convertPounds(w) {
  return (w / 2.20462262).toFixed(3);
}
