let darkMode = localStorage.getItem('darkmode')

if (darkMode) {
    document.body.classList.add('darkmode')
}

const darkModeToggle = document.querySelector('#dark-mode-toggle')

const darkModeEnable = () => {
    console.log("dark mode enabled")
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode', 'enabled')
}

const darkModeDisable = () => {
    console.log("dark mode disabled")
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode', '')
}

darkModeToggle.addEventListener('click', () => {
    darkmode = localStorage.getItem('darkmode')
        // toggle darkmode
    if (!darkmode) {
        darkModeEnable()
    } else {
        darkModeDisable()
    }
})