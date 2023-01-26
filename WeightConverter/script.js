const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resEl = document.getElementById("copmputed-weight");

   let errorTime;
function updateRes() {
    const inputElVal = +inputEl.value;
    if(inputElVal < 0 || isNaN(inputElVal)) {
        errorEl.innerText = "Enter a Valid Number!";
        clearTimeout(errorTime);
        errorTime = setTimeout(()=>{
            errorEl.innerText = "";
            inputEl.value = "";
        },2000);
    } else {
        resEl.innerText = inputElVal/2.2;
    }
}


inputEl.addEventListener("input", updateRes);