const btnEl = document.getElementById("btn");
const alertEl = document.getElementById("alert-container");
const alertElYBtnEl = alertEl.querySelector("#yBtn");
const alertElNBtnEl = alertEl.querySelector("#nBtn");
const appEl = document.getElementById("app");

getNotes().forEach(note => {
    const noteEl = createNoteEl(note.id, note.content);
    appEl.insertBefore(noteEl, btnEl);
});

const uid = function(){
    return Date.now().toString(36) + Math.random().toString(36).substring(2);
}

function deleteNote(id, element) {
    const notes = getNotes().filter(note => note.id !== id);
    saveNote(notes);
    appEl.removeChild(element);
}
function updateNote(id, content) {
    const notes = getNotes();
    const targetNote = notes.filter(note => note.id === id)[0]; // filter returns an array
    targetNote.content = content;
    saveNote(notes);
}

function createNoteEl(id, content) {
    const element = document.createElement("textarea");
    element.classList.add("note");
    element.placeholder = "Empty Note. Click and Add your note.";
    element.value = content;

    element.addEventListener("dblclick", () => {
        alertEl.style.display = "flex";
        alertElYBtnEl.addEventListener("click", () => {
            deleteNote(id, element);
            alertEl.style.display = "none";
        })
        alertElNBtnEl.addEventListener("click", () => {
            alertEl.style.display = "none";
        })
    });

    element.addEventListener("input", () => {
        updateNote(id, element.value);
    })

    return element;
}

function getNotes() {
    return JSON.parse(localStorage.getItem("noteOn") || "[]");
}

function saveNote(notes) {
    localStorage.setItem("noteOn", JSON.stringify(notes))
}

function addNote() {
    const notes = getNotes();
    const noteObj = {
        id:uid().substring(0, 18),
        content: "",
    };
    const noteEl = createNoteEl(noteObj.id, noteObj.content);
    appEl.insertBefore(noteEl, btnEl);
    notes.push(noteObj);
    saveNote(notes);
}


btnEl.addEventListener("click", addNote);