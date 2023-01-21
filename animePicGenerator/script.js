const btnEl = document.getElementById("btn");
const animeContEl = document.querySelector(".anime-container");
const animeImgEl = document.querySelector(".anime-image");
const animeNameEl = document.querySelector(".anime-name");

btnEl.addEventListener("click", async function() {
    try {
        btnEl.disabled = true;
        btnEl.innerText = "Loading...";
        animeImgEl.src = "loader.svg";
        animeNameEl.innerText = "Updating...";
        const res = await fetch("https://api.catboys.com/img").then(res => res.json());
        btnEl.disabled = false;
        btnEl.innerText = "Click to Get Anime Character!";
        console.log(res);
        animeContEl.style.display = "block";
        animeImgEl.src = res.url;
        animeNameEl.innerText = res.artist === "unknown"? "Sorry, Didn't watch this Character Before :(" : res.artist.toUpperCase();
    } catch (error) {
        btnEl.disabled = true;
        btnEl.innerText = "Try Again Later!"
        animeImgEl.style.display = "none";
        animeNameEl.innerText = "Some Error Occured, try refreshing or check your Internet connection!!!"
    }
})