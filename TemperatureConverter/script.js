const celciusEl = document.getElementById("celcius");
const farhenheitEl = document.getElementById("farhenheit");
const kelvinEl = document.getElementById("kelvin");


function computeTemp(event) {
    const currentValue = +event.target.value;
    switch (event.target.name) {
        case "celcius":
            kelvinEl.value = (currentValue + 273.32).toFixed(2);
            farhenheitEl.value = (currentValue * 1.8 + 32).toFixed(2);
            break;
        case "farhenheit":
            celciusEl.value = ((currentValue - 32)/1.8).toFixed(2);
            kelvinEl.value = (((currentValue - 32)/1.8) + 273.32).toFixed(2);
        case "kelvin":
            celciusEl.value = (currentValue - 273.32).toFixed(2);
            farhenheitEl.value = (((currentValue - 273.32)*1.8) - 273.32).toFixed(2);
        default:
            break;
    }
}