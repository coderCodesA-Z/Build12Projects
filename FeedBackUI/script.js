const ratingElements = document.querySelectorAll(".rating");
const btnEl = document.getElementById("btn");
const containerEl = document.getElementById("container");

let selectedRating = "";

ratingElements.forEach(ratingElement => {
    ratingElement.addEventListener("click", (event) => {
        // console.log(event.target.innerText.trim() || event.target.parentNode.innerText.trim());
        selectedRating = (event.target.innerText || event.target.parentNode.innerText).trim();
        removeActive();
        event.target.classList.add("active");
        event.target.parentNode.classList.add("active");
        
    })
});

btnEl.addEventListener("click", () => {
    if(selectedRating == "") return;
    let message = "";
    if(selectedRating === "UnHappy") message = "We're Sorry to hear that; If there's something we can do for you, please let us know!";
    else if(selectedRating === "Neutral") message = "We hope to see you again. We're constantly improving through your feedbacks!";
    else message = "Thanks so much for taking the time to leave us a Satisfied Feedback – it’s much appreciated!"
    containerEl.innerHTML = `
    <strong>ThankYou!&hearts;</strong>
    <br><br>
    <strong>Feedback: ${selectedRating}</strong>
    <br><br>
    <p>${message}</p>
    `;
});

function removeActive() {
    ratingElements.forEach(ratingElement => {
        ratingElement.classList.remove("active");
    })
}