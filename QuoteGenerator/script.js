const btn = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";
async function getQuote() {
    try {
        btn.innerText = "Loading...";
        btn.disabled = true;
        quoteEl.innerText = "Updating...";
        authorEl.innerText = "Updating...";
        // const res = await fetch(apiURL).then((res) => res.json());
        const res = await fetch(apiURL);
        const data = await res.json();
        btn.innerText = "Get a Quote!";
        btn.disabled = false;
        const quoteContent = data.content.trim();
        const quoteAuthor = data.author.trim();
        console.log(quoteContent);
        quoteEl.innerText = quoteContent;
        authorEl.innerText = "~ " + quoteAuthor;
    }
    catch(error) {
        quoteEl.innerText = "An Error Happened, Try Again Later!";
        authorEl.innerText = "Maybe Try Refreshing the Page";
        btn.innerText = "NOT AVAILABLE!!";
        btn.disabled = true;
    }
}

getQuote();

btn.addEventListener("click", getQuote);