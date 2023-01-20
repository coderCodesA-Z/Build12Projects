const ratingElements = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");

let selectedRating = "";

ratingElements.forEach(ratingElement => {
    ratingElement.addEventListener("click", (event) => {
        // console.log(event.target.innerText.trim() || event.target.parentNode.innerText.trim());
        selectedRating = (event.target.innerText || event.target.parentNode.innerText).trim();
        removeActive();
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
        
    })
})

function removeActive() {
    ratingElements.forEach(ratingElement => {
        ratingElement.classList.remove("active");
    })
}