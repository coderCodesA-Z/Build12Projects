const inputEl = document.getElementById("input");
const errorEl = document.getElementById("error");
const resEl = 

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

    }
}


inputEl.addEventListener("input", updateRes);