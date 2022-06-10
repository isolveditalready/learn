const modal = document.querySelector('.modal-btn')

modal.addEventListener('click', () => {
    const modalBg = document.querySelector('.modal-bg')
    const modalClose = document.querySelector('.modal-close')
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

})

