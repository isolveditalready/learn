import DropZone from "../view/DropZone.js"
import KanbanAPI from "../api/KanbanAPI.js"

export default class Item {
    constructor(id, content) {
        const bottomDropZone = DropZone.createDropZone()

        this.elements = {}
        this.elements.root = Item.createRoot()
        this.elements.input = this.elements.root.querySelector(".kanban__item-input")

        this.elements.root.dataset.id = id
        this.elements.input.textContent = content
        this.content = content
        this.elements.root.appendChild(bottomDropZone)

        const onBlur = () => {
            const newContent = this.elements.input.textContent.trim()

            console.log(this.content)
            console.log(newContent)

            if (newContent == this.content ) {
                return
            }

            this.content = newContent
            //KanbanAPI.updateItem(id,this)
            console.log("about to updateitem from class Item")
            KanbanAPI.updateItem(id, {
                content: this.content
            })
        }

        this.elements.input.addEventListener("blur", onBlur)
        this.elements.input.addEventListener('dblclick', () => {
            console.log("you doubl clicked me")
            confirm("ARE you SURE you want to delete me?")

            if(confirm) {
                console.log("OK we are a go for delete")
                KanbanAPI.deleteItem(id)
                //const p = this.elements.input.parentElement
                //p.remove()
                //this.elements.input.parentElement.remove()
                this.elements.input.removeEventListener("blur", onBlur)
                this.elements.root.parentElement.removeChild(this.elements.root)
            }
        })

        this.elements.root.addEventListener('dragstart', (e) => {
            console.log("you are dragging me")
            console.log(e)
            e.dataTransfer.setData("text/plain", id)
        })

        this.elements.root.addEventListener('dragover', e => {
            console.log("shit is being drragged over")
        })

        this.elements.root.addEventListener('drop', e => {
            console.log("think its over bein dragged")
        })

    }


    static createRoot() {
        const range = document.createRange()

        range.selectNode(document.body)

        return range.createContextualFragment(`
            <div class="kanban__item" draggable="true">
                <div class="kanban__item-input" contenteditable></div>
            </div> 
        `).children[0]
    }
}