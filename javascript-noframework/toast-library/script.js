import Toast from "./Toast.js"

document.querySelector("button").addEventListener('click', () => {
    const toast = new Toast({
        position: "top-right",
        text:"WORK NOW",
        autoClose:2000,
        canClose:true,
        showProgress: true,
    })
    setTimeout(() => {
        toast.update({text: "OK???"})
    },1500)
})
