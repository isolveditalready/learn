const f = (() => {
         // draw the rec
         const button = document.querySelector('.btn')
         const value = document.querySelector('.value')
         let per = 0;
         const progressBarFill = document.getElementsByClassName('fill')[0]
         const pb1 =  {
             get property() {
                 return progressBarFill.style.width
             },
             set property(val) {
                 progressBarFill.style.width = val + '%'
             }
         }
         button.addEventListener('click', (e) => {
             console.log(e.target.classList)
            if ( e.target.classList == 'click') {
                if ( per === 100 ) return
                per = per + 10
                pb1.property =   per
                value.innerHTML = '<br>' + per + '%</br>'
            } else {
                progressBarFill.style.width = 0 + '%'
                per = 0
                value.innerHTML = '<br>' + per + '%</br>'
            }


         })
         return {
            objectTest : 1,
            pb1
         }
})()