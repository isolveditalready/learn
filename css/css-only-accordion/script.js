const section1Checkbox = document.querySelector('#section1')
const accordion__content = document.querySelector('.accordion__content')
const accordion__label = document.querySelector('.accordion__label')

section1Checkbox.addEventListener('change', () => {
    console.log("you complete me")
    if (section1Checkbox.checked) {
        console.log("shit was clicked")
        console.log("accordion__content was ", accordion__content)
        accordion__content.classList.add("show")
    } else {
        if (accordion__content.classList.contains("show")) {
            accordion__content.classList.remove("show")
        }
    }
})