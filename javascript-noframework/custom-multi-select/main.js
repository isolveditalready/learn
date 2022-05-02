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
                        this._deselect(e)
                    } else {
                        this._select(e)
                    }
            })
        })
        this.originalSelect.insertAdjacentElement('afterend', this.customSelect)
    }

    _select(s) {
        console.log("this",this)
        s.target.classList.add('select__item--selected')
    }

    _deselect(s) {
        s.target.classList.remove('select__item--selected')
    }
}

document.querySelectorAll(".custom-select").forEach(selectElement => {
    new CustomSelect(selectElement)
})