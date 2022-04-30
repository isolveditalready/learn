export default class NotesView {
    constructor(root, { onNoteSelect, onNoteAdd, onNoteEdit, onNoteDelete } = {}) {
        this.root = root
        this.onNoteSelect = onNoteSelect
        this.onNoteAdd = onNoteAdd
        this.onNoteEdit = onNoteEdit
        this.onNoteDelete = onNoteDelete
        this.root.innerHTML = `
            <div class="notes__sidebar">
                <button class="notes__add" type="button">Add Note</button>
                <div class="notes__list"></div>
            </div>
            <div class="notes__preview">
                <input class="notes__title" type="text" placeholder="New Note...">
                <textarea class="notes__body">Take Note...</textarea>
            </div>
        `;
        const btnAddNote = this.root.querySelector('.notes__add')
        const inpTitle   = this.root.querySelector('.notes__title')
        const inpBody    = this.root.querySelector('.notes__body')

        btnAddNote.addEventListener('click', () => {
             this.onNoteAdd()
        });

        [inpTitle, inpBody].forEach(inputField => {
            inputField.addEventListener("blur", () => {
                const updatedTitle = inpTitle.value.trim();
                const updatedBody = inpBody.value.trim();

                this.onNoteEdit(updatedTitle, updatedBody);
            })
        })
        this.updateNotePreviewVisibility()
    }

    _createListItemHTML(id, title, body, updated) {
        const MAX_BODY_LENGTH = 60

        return `
            <div class="notes__list-item" data-note-id="${id}">
                <div class="notes_small-title">${title}</div>
                <div class="notes_small-body">
                    ${body.substring(0,MAX_BODY_LENGTH)};
                    ${body.length > MAX_BODY_LENGTH ? "..." : ""};
                </div>
                <div class="notes__small-updated">
                    ${updated.toLocaleString(undefined, {dateStyle: "full", timeStyle:"short"})}
                </div>
            </div> 
        `
    }

    updateNoteList(notes) {
        const notesListContainer = this.root.querySelector(".notes__list")
        const notesPreviewContainer = this.root.querySelector(".notes__preview")
        // Empty list
        notesListContainer.innerHTML = ""

        for ( const note of notes ) {
            const html = this._createListItemHTML(note.id, note.title, note.body, new Date(note.updated))
            notesListContainer.insertAdjacentHTML("beforeend", html)

        }
        notesListContainer.querySelectorAll('.notes__list-item').forEach( noteListItem => {
            noteListItem.addEventListener('click', () => {
                this.onNoteSelect(noteListItem.dataset.noteId)
            })

            noteListItem.addEventListener('dblclick', () => {
                const doDelete = confirm("are you sure to delete")
                if (doDelete) {
                    this.onNoteDelete(noteListItem.dataset.noteId)
                }
            })
        })
    }

    updateActiveNote(notes) {
        this.root.querySelector('.notes__title').value = notes.title
        this.root.querySelector('.notes__body').value = notes.body

        this.root.querySelectorAll('.notes__list-item').forEach( noteListItem => {
            noteListItem.classList.remove('notes__list-item--selected')
        });
        const id = notes.id

        this.root.querySelector(`.notes__list-item[data-note-id="${id}"]`).classList.add('notes__list-item--selected')
    }

    hideDefaultPreview(hide) {
        hide ? 'visibility' : 'hidden' 
    }

    updateNotePreviewVisibility(visible) {
        this.root.querySelector('.notes__preview').style.visibility = visible ? 'visible' : 'hidden'
    }
}