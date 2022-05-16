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

            if (newContent == this.content ) {
                return
            }

            this.content = newContent
            KanbanAPI.updateItem(id, {
                content: this.content
            })
        }

        this.elements.input.addEventListener("blur", onBlur)
        this.elements.input.addEventListener('dblclick', () => {
            confirm("ARE you SURE you want to delete me?")

            if(confirm) {
                KanbanAPI.deleteItem(id)
                this.elements.input.removeEventListener("blur", onBlur)
                this.elements.root.parentElement.removeChild(this.elements.root)
            }
        })

        this.elements.root.addEventListener('dragstart', (e) => {
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