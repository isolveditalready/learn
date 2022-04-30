import App from "./App.js"

const root = document.querySelector('#app')
const app = new App(root)

// NotesAPI.saveNote({
//     title: "new notes updated again now",
//     body:"I am a new note ;sldkfjs;dfl;lskdfj;sldfkjs;dfsdfkjsd;fkjsdf;lksdjf;lsdkjf;sdfkjs;dfsd;flkjs;dlfjs;fjsd;fsd"
// })

// console.log(NotesAPI.getAllNotes())




// // real stuff below
// const app = document.querySelector('#app')

// const view = new NotesView(app, {
//     onNoteAdd() {
//         console.log("lets add a note")
//     },
//     onNoteSelect(id) {
//         console.log("noteid is", id)
//     },
//     onNoteDelete(id) {
//         console.log("lets delete this id",id)
//     },
//     onNoteEdit(newTitle, newBody) {
//         console.log(newTitle)
//         console.log(newBody)
//     }
// })

// const notes = NotesAPI.getAllNotes()
// if (notes.length > 0) {
//     view.updateNoteList(notes)
//     view.updateActiveNote(notes[0])
// }