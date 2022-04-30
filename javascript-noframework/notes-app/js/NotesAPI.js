export default class NotesAPI {
    static getAllNotes() {
        const notes = JSON.parse(localStorage.getItem("notesapp-notes") || "[]")

        return notes.sort((a,b) => {
            return new Date(a.updated) > new Date(b.updated) ? -1 : 1;
        })
    }

    static saveNote(noteToSave) {
        const notes = NotesAPI.getAllNotes()
        const existing = notes.find( note => note.id == noteToSave.id)
        if ( existing ) {
            // find the damn item and delete and reinsert
            existing.title = noteToSave.title
            existing.body = noteToSave.body
            existing.updated = new Date().toISOString()
        } else {
            noteToSave.id = Math.floor(Math.random() * 1000000)
            noteToSave.updated = new Date().toISOString()
            notes.push(noteToSave)
        }

        localStorage.setItem('notesapp-notes', JSON.stringify(notes))
    }

    static deleteNote(id) {
        //let's 
        const  notes = NotesAPI.getAllNotes()
        const notesToKeep = notes.filter( note => note.id != id)
        localStorage.setItem("notesapp-notes", JSON.stringify(notesToKeep))

    }
}