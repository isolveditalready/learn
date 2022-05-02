// const select__items = document.querySelectorAll('.select__item')
// console.log("here we go")

// select__items.forEach(select__item => {
//     select__item.addEventListener('click', (e) => {
//         console.dir(e.target)
//         e.target.classList.add('select__item--selected')
//     })
// })

class CustomSelect {
    constructor(originalSelect) {
        console.log(this)
        console.log("--", originalSelect)
        this.originalSelect = originalSelect;
        this.customSelect = document.createElement("div")
        this.customSelect.classList.add("select")
        console.log('xx')
        console.log(this.originalSelect)

        this.originalSelect.querySelectorAll("option").forEach(optionElement => {
            const itemElement = document.createElement("div") 

            itemElement.classList.add("select__item")
            itemElement.textContent = optionElement.textContent
            this.customSelect.appendChild(itemElement)
            itemElement.addEventListener('click', (e) => {
                    console.dir(e.target)
                    if (itemElement.classList.contains('select__item--selected')) {
                        this.optionSelect = optionElement
                        this._deselect(e)
                    } else {
                        this.optionSelect = optionElement
                        this._select(e)
                    }
            })
        })
        this.originalSelect.insertAdjacentElement('afterend', this.customSelect)
    }

    _select(s) {
        this.optionSelect.selected = true
        s.target.classList.add('select__item--selected')
    }

    _deselect(s) {
        this.optionSelect.selected = false 
        s.target.classList.remove('select__item--selected')
    }
}

document.querySelectorAll(".custom-select").forEach(selectElement => {
    console.log("here we go")
    new CustomSelect(selectElement)
    console.log("here we go end")
})