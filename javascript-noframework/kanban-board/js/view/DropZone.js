import KanbanAPI from "../api/KanbanAPI.js"

export default class DropZone {
    static createDropZone() {
        const range = document.createRange()

        range.selectNode(document.body)

        const dropZone = range.createContextualFragment(`
            <div class="kanban__dropzone"></div> 
        `).children[0]

        dropZone.addEventListener('dragover', e => {
            e.preventDefault()
            dropZone.classList.add("kanban__dropzone--active")
        })

        dropZone.addEventListener("dragleave", () => {
            dropZone.classList.remove("kanban__dropzone--active")
        })

        dropZone.addEventListener("drop", e => {
            e.preventDefault()
            console.log("::::::::::::::::")
            console.log("::::::::::::::::")
            console.log("::::::::::::::::")
            console.log("::::::::::::::::")
            dropZone.classList.remove("kanban__dropzone--active")

            const columnElement = dropZone.closest(".kanban__column")
            const columnId = Number(columnElement.dataset.id)
            const dropZonesInColumn = Array.from(columnElement.querySelectorAll(".kanban__dropzone"))
            const droppedIndex = dropZonesInColumn.indexOf(dropZone)

            const itemId = Number(e.dataTransfer.getData("text/plain"))
            console.log(`itemid is ${itemId}`)
            const droppedElement = document.querySelector(`[data-id="${itemId}"]`)
            const insertAfter = dropZone.parentElement.classList.contains("kanban__item") ? dropZone.parentElement : dropZone
            console.log("insertAFter is", insertAfter)
            console.dir(dropZone.parentElement)
            console.log("where am i dropping this crap to")
            console.dir(e)
            console.log(e.target.previousElementSibling)
            //const prevSib = e.target.previousElementSibling.parentElement
            const tempDiv = document.createElement('div')
            tempDiv.textContent = 'created new div by lee'
            //prevSib.insertAdjacentElement('afterend', tempDiv)
            console.log(typeof droppedElement)
            console.dir(droppedElement)
            //prevSib.insertAdjacentElement('afterend', droppedElement)
            insertAfter.after(droppedElement)
            

            // remove from original spot

            // move to new spot
                // find sibling
                // insert after sibling

            console.log("about to updateimte from dropzone")
            KanbanAPI.updateItem(itemId,{
                columnId,
                position: droppedIndex
            })

        })

        return dropZone

    }    
}