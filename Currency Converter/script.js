const currencyFirstEl = document.getElementById("currency-first");
const worthFirstEl = document.getElementById("worth-first");
const currencySecondEl = document.getElementById("currency-second");
const worthSecondEl = document.getElementById("worth-second");

const exchangeRateEl = document.getElementById("exchange-rate");
const currency1El = document.getElementById("currency1");
const currency2El = document.getElementById("currency2");
const exchangeValEl = document.getElementById("exchangeVal");

let apiKey = "https://v6.exchangerate-api.com/v6/3f39b4c72f1273e172a9b1ae/latest/";

updateRate();

async function updateRate() {
    const currencyFirstElVal = currencyFirstEl.value;
    const currencySecondElVal = currencySecondEl.value;
    const res = await fetch(apiKey+currencyFirstElVal).then(res => res.json());

    const rate = res.conversion_rates[currencySecondElVal];
    currency1El.innerText = currencyFirstElVal;
    currency2El.innerText = currencySecondElVal;
    exchangeValEl.innerText = rate;

    worthSecondEl.disabled = "false";
    const calculatedRate = (+worthFirstEl.value * +rate);
    worthSecondEl.value = calculatedRate;
    worthSecondEl.disabled = "true";
}  

currencyFirstEl.addEventListener("change", updateRate);
currencySecondEl.addEventListener("change", updateRate);
worthFirstEl.addEventListener("input", updateRate);