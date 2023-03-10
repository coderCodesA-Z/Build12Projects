const btnEl = document.getElementById("btn");
const jokeElement = document.getElementById("joke");
const apiKey = "62kGkXnhs6ZqsK7n5E++5Q==MvHxgE2PMDbgEdJD";
const options = {
    "method" : "GET",
    "headers" : { 'X-Api-Key': apiKey}
}
const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1";

async function getJoke() {
    try {
        jokeElement.innerText = "updating...";
        btnEl.disabled = true;
        btnEl.innerText = "Wait ๐"
        const response = await fetch(apiURL, options);
        const data = await response.json();
        btnEl.disabled = false;
        btnEl.innerText = "Tell Me a Joke!๐"
        jokeElement.innerText = data[0].joke;
    } catch (error) {
        jokeElement.innerText = "An Error Happened๐, Try Again Later๐";
        btnEl.disabled = true;
        btnEl.innerText = "Error!๐"
    }
    
}
btnEl.addEventListener("click", getJoke);