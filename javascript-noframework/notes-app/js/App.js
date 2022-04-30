import NotesAPI from './NotesAPI.js'
import NotesView from './NotesView.js'

export default class App {
    constructor(root) {
        this.notes = []
        this.activeNote = null
        this.view = new NotesView(root, this._handlers())

        this._refreshNotes();
    }

    _handlers() {
        return {
                onNoteAdd: () =>  {
                        console.log("lets add a note")
                        const newNote = {
                            title: "New Note",
                            body: "Take Note.."
                        }

                        NotesAPI.saveNote(newNote);
                        this._refreshNotes()
                },
                onNoteDelete : (id) =>  {
                        //this._deleteNote(id)
                        console.log(`id to del is ${id}`)
                        this._eraseNote(id)
                        this._refreshNotes()
                },
                onNoteSelect: id  => {
                        const selectedNote = this.notes.find( note =>  note.id == id);
                        this._setActiveNotes(selectedNote);

                },
                onNoteEdit: (newTitle, newBody) => {
                        const editedNote = {
                            title: newTitle,
                            body: newBody,
                            id: this.activeNote.id
                        }
                        NotesAPI.saveNote(editedNote)
                        this._refreshNotes()
                }
        }
    }


    _refreshNotes() {
        const notes = NotesAPI.getAllNotes()
        this._setNotes(notes)

        if (notes.length > 0 ) {
            this._setActiveNotes(notes[0])
        }
    }

    _eraseNote(id) {
        console.log(`id to del is ${id}`)   
        NotesAPI.deleteNote(id)
    }

    _setNotes(notes) {
        this.notes = notes
        this.view.updateNoteList(notes)
        this.view.updateNotePreviewVisibility(notes.length > 0)
    }

    _setActiveNotes(note) {
        this.activeNote = note;
        this.view.updateActiveNote(note)
    }

}