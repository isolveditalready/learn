const modal = document.querySelector('.modal-btn')

function uncheckAllBox() {
        const checkboxes = document.querySelectorAll('[data-checkbox]')
        checkboxes.forEach((e) => {
            e.checked = false 
        })
}

function uncheckBox() {
    console.log("------> uncheckBox was clalled")
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
    console.log("----------------------------------------------------------clicked on modalllllllllll")
    console.log("----------------------------------------------------------clicked on modalllllllllll")
    console.log("----------------------------------------------------------clicked on modalllllllllll")
    console.log(date)
    console.log("----------------------------------------------------------clicked on modalllllllllll")
    console.log("----------------------------------------------------------clicked on modalllllllllll")
    console.log("----------------------------------------------------------clicked on modalllllllllll")
    console.log(this)
    //e.preventDefault()
    uncheckAllBox()
    const modalBg = document.querySelector('.modal-bg')
    const modalClose = document.querySelector('.modal-close')
    const submitAll = document.querySelector('.submitAll')
    modalBg.classList.add('bg-active')
    modalClose.addEventListener('click', (e) => {
        //e.stopPropagation()
        modalBg.classList.remove('bg-active')
    })

    modalBg.addEventListener('click' , (e) => {
        //e.preventDefault()
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
        console.log("answer is", answer)
        console.log("e is", e)
        console.dir(e)
        if  (answer === true) {
            modalBg.classList.remove('bg-active')
        }
        return false 
    })
})


