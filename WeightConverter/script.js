const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resEl = document.getElementById("copmputed-weight");

let errorTime, clearRes;
function updateRes() {
	const inputElVal = +inputEl.value;
	if (inputElVal < 0 || isNaN(inputElVal)) {
		errorEl.innerText = "Enter a Valid Number!";
		clearTimeout(errorTime);
		errorTime = setTimeout(() => {
			errorEl.innerText = "";
			inputEl.value = "";
		}, 2000);
	} else {
		resEl.innerText = (inputElVal / 2.2).toFixed(2);
		clearTimeout(clearRes);
		clearRes = setTimeout(() => {
			inputEl.value = "";
			resEl.innerText = "";
		}, 7000);
	}
}

inputEl.addEventListener("input", updateRes);
