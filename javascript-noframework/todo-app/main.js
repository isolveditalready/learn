const todos = document.querySelectorAll('.todo')
const togglers = document.querySelectorAll('.toggler')
const togglerTarget = document.querySelector('.toggler-target')
console.log("here")
console.log(togglerTarget)

todos.forEach(todo => {
    todo.addEventListener('click', () => {
        console.log("you clicking ")
        todo.classList.toggle("active")
    })
})

togglers.forEach(toggler => {
    toggler.addEventListener('click', () => {
        toggler.classList.toggle("active")
        // const togglerStatus = togglerTarget.style.display
        // if (togglerStatus === 'block' ) {
        //     togglerTarget.style.display = 'none'
        // } else {
        //     togglerTarget.style.display = 'block'
        // }
        //togglerTarget.style.display = ! togglerTarget.style.display
        togglerTarget.classList.toggle("active")

    })
})

