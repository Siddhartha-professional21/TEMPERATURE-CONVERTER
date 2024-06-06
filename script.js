const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;

const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

const handleCelsiusInput = () => {
    const celsiusInput = document.getElementById('celsius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    
    const celsius = Number(celsiusInput.value);
    if (!isNaN(celsius)) {
        const fahrenheit = celsiusToFahrenheit(celsius);
        fahrenheitInput.value = fahrenheit.toFixed(2);
    } else {
        fahrenheitInput.value = '';
    }
};

const handleFahrenheitInput = () => {
    const celsiusInput = document.getElementById('celsius-input');
    const fahrenheitInput = document.getElementById('fahrenheit-input');
    
    const fahrenheit = Number(fahrenheitInput.value);
    if (!isNaN(fahrenheit)) {
        const celsius = fahrenheitToCelsius(fahrenheit);
        celsiusInput.value = celsius.toFixed(2);
    } else {
        celsiusInput.value = '';
    }
};

document.getElementById('celsius-input').addEventListener('input', handleCelsiusInput);
document.getElementById('fahrenheit-input').addEventListener('input', handleFahrenheitInput);
