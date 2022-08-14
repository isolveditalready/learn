const modal = document.querySelector('.modal-btn')

function uncheckAllBox() {
    const checkboxes = document.querySelectorAll('[data-checkbox]')
    checkboxes.forEach((e) => {
        e.checked = false
    })
}

function uncheckBox() {
    const buttonUnCheckAll = document.querySelector('.buttonUnCheckAll')
    buttonUnCheckAll.addEventListener('click', () => {
        uncheckAllBox()
    })
}

function checkBox() {
    const buttonCheckAll = document.querySelector('.buttonCheckAll')
    buttonCheckAll.addEventListener('click', () => {
        const checkboxes = document.querySelectorAll('[data-checkbox]')
        checkboxes.forEach((e) => {
            e.checked = true
        })
    })
}

modal.addEventListener('click', (e) => {
    const date = new Date()
    console.log(date)
    console.log(this)
        //e.preventDefault()
    uncheckAllBox()
    const modalBg = document.querySelector('.modal-bg')
    const modalClose = document.querySelector('.modal-close')
    const submitAll = document.querySelector('.submitAll')
    modalBg.classList.add('bg-active')
    modalClose.addEventListener('click', (e) => {
        modalBg.classList.remove('bg-active')
    })

    modalBg.addEventListener('click', (e) => {
        const classNameExtracted = e.target.className
        if (classNameExtracted.includes('modal-bg')) {
            modalBg.classList.remove('bg-active')
        }
    })

    checkBox()
    uncheckBox()

    submitAll.addEventListener('click', (e) => {
        const answer = confirm("Are you sure you want to submit?")
        e.stopImmediatePropagation()
        if (answer === true) {
            modalBg.classList.remove('bg-active')
        }
        return false
    })
})