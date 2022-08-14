/* const accordionButton = document.querySelector(".accordion__button")
const accordionContent = document.querySelector(".accordion__content")

accordionButton.addEventListener('click', () => {
    console.log("button was pressed")
    accordionButton.classList.toggle("accordion__button--active")
    accordionContent.classList.toggle('accordion__content--active')
}) */

document.querySelectorAll('.accordion__button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling
        button.classList.toggle('accordion__button--active')

        if (button.classList.contains('accordion__button--active')) {
            accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        } else {
            accordionContent.style.maxHeight = 0;

        }
    })

})