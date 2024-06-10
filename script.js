document.getElementById('tempConverterForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const temperature = parseFloat(document.getElementById('temperature').value);
    const inputUnit = document.getElementById('inputUnit').value;
    const outputUnit = document.getElementById('outputUnit').value;
    let result;
    if (inputUnit === 'celsius' && outputUnit === 'fahrenheit') {
        result = (temperature * 9/5) + 32;
    } else if (inputUnit === 'celsius' && outputUnit === 'kelvin') {
        result = temperature + 273.15;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'celsius') {
        result = (temperature - 32) * 5/9;
    } else if (inputUnit === 'fahrenheit' && outputUnit === 'kelvin') {
        result = (temperature - 32) * 5/9 + 273.15;
    } else if (inputUnit === 'kelvin' && outputUnit === 'celsius') {
        result = temperature - 273.15;
    } else if (inputUnit === 'kelvin' && outputUnit === 'fahrenheit') {
        result = (temperature - 273.15) * 9/5 + 32;
    } else {
        result = temperature; 
    }
    document.getElementById('result').innerText = `Result: ${result.toFixed(2)} ${outputUnit}`;
});
