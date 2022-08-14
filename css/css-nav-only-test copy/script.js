const cpCtaControls = document.querySelector('.cp-cta-controls')
const cpCtaContainer = document.querySelector('.cp-cta-container')

cpCtaControls.addEventListener('click', () => {
    console.log("thank you fo rclicking")
    cpCtaContainer.classList.add('noshow')
})