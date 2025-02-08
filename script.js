function convertTemp() {
    const inputTemp = parseFloat(document.getElementById('inputTemp').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const output = document.getElementById('output');
  
    if (isNaN(inputTemp)) {
      output.textContent = 'Please enter a valid temperature.';
      return;
    }
  
    let celsius, fahrenheit, kelvin;
  
    switch (inputUnit) {
      case 'Celsius':
        celsius = inputTemp;
        fahrenheit = (inputTemp * 9/5) + 32;
        kelvin = inputTemp + 273.15;
        break;
      case 'Fahrenheit':
        celsius = (inputTemp - 32) * 5/9;
        fahrenheit = inputTemp;
        kelvin = celsius + 273.15;
        break;
      case 'Kelvin':
        celsius = inputTemp - 273.15;
        fahrenheit = (celsius * 9/5) + 32;
        kelvin = inputTemp;
        break;
      default:
        output.textContent = 'Invalid unit selected.';
        return;
    }
  
    output.innerHTML = `
      <p>${inputTemp} ${inputUnit} equals:</p>
      <ul>
        <li>${celsius.toFixed(2)} Celsius</li>
        <li>${fahrenheit.toFixed(2)} Fahrenheit</li>
        <li>${kelvin.toFixed(2)} Kelvin</li>
      </ul>
    `;
  }