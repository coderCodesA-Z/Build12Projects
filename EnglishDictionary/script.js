const inputEl = document.getElementById("input");
const infoEl = document.getElementById("info-text");
const meaningContainerEl = document.getElementById("meaning-container");
const title = document.getElementById("title");
const meaning = document.getElementById("meaning");
const audioEl = document.getElementById("audio");

async function fetchAPI(word) {
    try {
        meaningContainerEl.style.display = "none";
        infoEl.style.display = "block";
        infoEl.innerText = `Searching the meaning of "${word}"`;
        const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const res = await fetch(url).then((res) => res.json());
        infoEl.style.display = "none";
        meaningContainerEl.style.display = "block";
        if(res.title) {
            title.innerText = word.toUpperCase();
            meaning.innerText = "NO DEFINITIONS FOUND. Maybe Try Checking the Word!";
            audioEl.style.display = "none";
        } else {
            audioEl.style.display = "inline-flex";
            title.innerText = res[0].word.toUpperCase();
            meaning.innerText = res[0].meanings[0].definitions[0].definition.toUpperCase();
            res[0].phonetics.forEach(element => {
                if(element.audio !== "") {
                    audioEl.src = element.audio;
                }
            }); ;
        }
    }
    catch(error) {
        infoEl.innerText = `An Error Occured, try again later!`;
        console.log("Error!");
    }
    
}

inputEl.addEventListener("keyup", (e) => {
    if(e.target.value && e.key === "Enter") {
        fetchAPI(e.target.value);
    }
    if(e.target.value === "") {
        infoEl.style.display = "block";
        infoEl.innerText = "Type a Word and Press Enter⏎";
        meaningContainerEl.style.display = "none";
    }
})