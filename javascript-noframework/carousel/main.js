const carousels = document.querySelectorAll('.carousel__button')

const carousel_items = document.querySelectorAll('.carousel__item')
carousel_items[0].classList.add('carousel__item-active')

carousels.forEach( (carousel,index)  => {
    carousel.addEventListener('click', (e) => {
        carousel_items.forEach( item => {
            item.classList.remove('carousel__item-active')
        })

        carousel_items[`${index}`].classList.add('carousel__item-active')
    })
})
