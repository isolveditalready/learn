(function(){
    console.log("yahoo")
    function returnLastSeg(url) {
        return url.split("/").pop();
    }

    let navSelector = document.querySelector("nav")
    let output = document.querySelector("#output");

    navSelector.addEventListener('click', (e) => {
        e.preventDefault();
        console.dir(e);
        console.dir( returnLastSeg(e.srcElement.href));
        output.innerHTML = '<h2>' + returnLastSeg(e.srcElement.href) + '</h2>';
    })
})();