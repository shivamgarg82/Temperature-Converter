function convertTemperature() {
  const inputTemp = parseFloat(document.getElementById("temperature").value);
  const inputUnit = document.getElementById("unit").value;

  if (isNaN(inputTemp)) {
    document.getElementById("celsius").value = "";
    document.getElementById("fahrenheit").value = "";
    document.getElementById("kelvin").value = "";
    return;
  }

  let celsius, fahrenheit, kelvin;

  switch (inputUnit) {
    case "celsius":
      celsius = inputTemp;
      break;
    case "fahrenheit":
      celsius = ((inputTemp - 32) * 5) / 9;
      break;
    case "kelvin":
      celsius = inputTemp - 273.15;
      break;
  }

  fahrenheit = (celsius * 9) / 5 + 32;
  kelvin = celsius + 273.15;

  document.getElementById("celsius").value = celsius;
  document.getElementById("fahrenheit").value = fahrenheit;
  document.getElementById("kelvin").value = kelvin;
}
