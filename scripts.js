function convertirTemperatura() {
  const entrada = document.getElementById("inputCelsius").value;
  const celsius = parseFloat(entrada);
  const resultado = document.getElementById("resultado");

  if (isNaN(celsius)) {
    resultado.innerHTML = "❌ Error: Ingresa un número válido.";
    resultado.style.color = "red";
  } else {
    const kelvin = celsius + 273.15;
    const fahrenheit = (celsius * 9/5) + 32;

    resultado.style.color = "black";
    resultado.innerHTML = `
      ✅🌡️ Grados Kelvin: ${kelvin.toFixed(2)}<br>
      ✅🌡️ Grados Fahrenheit: ${fahrenheit.toFixed(1)}
    `;
  }
}