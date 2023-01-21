const btnEl = document.getElementById("btn");
const emojiNameEl = document.getElementById("emoji-name");

const apiURL = "https://emoji-api.com/emojis?access_key=b3245f1316a265e50469f6029a0f8c3a24461fed";
const emojis = [];

async function getEmoji() {
    let response = await fetch(apiURL).then(response => response.json());
    for(let i = 0; i<1500;i++) {
        emojis.push({
            "name" : response[i].unicodeName, 
            "code" : response[i].character
        });
    }
    console.log(emojis);
}

getEmoji();

btnEl.addEventListener("click", function() {
    const randomNum = Math.floor(Math.random() * emojis.length);
    btnEl.innerText = emojis[randomNum].code;
    emojiNameEl.innerText = emojis[randomNum].name;
});