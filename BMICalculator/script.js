const heightEl = document.getElementById("height");
const weightEl = document.getElementById("weight");
const btnEl = document.getElementById("btn");
const bmiResEl = document.getElementById("bmiRes");
const weightConditionEl = document.getElementById("weightCondition");

function calcBMI() {
    const heightVal = +heightEl.value / 100; // height recieved in cms, changed to m
    const weightVal = +weightEl.value;
    const bmiVal = (weightVal / (heightVal * heightVal)).toFixed(5);
    bmiResEl.disabled = "false";
    bmiResEl.value = bmiVal;

    let type = null;
    if(bmiVal < 18.5) {
        type = "UNDERWEIGHT!";
    } else if(bmiVal < 24.9) {
        type = "NORMAL WEIGHT!";
    } else if(bmiVal <= 29.9) {
        type = "OVERWEIGHT!";
    } else {
        type = "OBESITY";
    }

    weightConditionEl.textContent = type;
}

btnEl.addEventListener("click", calcBMI);