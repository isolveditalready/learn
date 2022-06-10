import Toast from "./Toast.js"

document.querySelector("button").addEventListener('click', () => {
    const toast = new Toast({
        position: "top-right",
        text:"Please work now!",
        autoClose:2300,
        canClose:true,
        showProgress: true,
    })
    setTimeout(() => {
        toast.update({text: "NO????"})
    },1000)
    setTimeout(() => {
        toast.update({text: "OK!!!???"})
    },1300)
})
