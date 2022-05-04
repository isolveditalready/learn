class Poll {
    constructor(root,title) {
        this.root = root
        this.selected = sessionStorage.getItem("poll-selected")
        this.endpoint = "http://localhost:3000/poll"

        this.root.insertAdjacentHTML("afterbegin", `
            <div class="poll__title">${ title }</div> 
        `)

        this._refresh()

    }

    async _refresh() {
        const response = await fetch(this.endpoint)
        const data = await response.json()
        console.log(data)

        this.root.querySelectorAll(".poll__option").forEach(option => {
            option.remove()
        })

        for (const option of data ) {
            const template = document.createElement("template")
            console.dir(template)
            const fragment = template.content

            template.innerHTML = `
                <div class="poll__option ${ this.selected == option.label ?  "poll__option--selected":  ""} ">
                    <div class="poll__option-fill"></div>
                    <div class="poll__option-info">
                        <div class="poll__label">${ option.label }</div>
                        <div class="poll__percentage">${ option.percentage }%</div>
                    </div>
                </div>

            `

            if (!this.selected) {
                fragment.querySelector(".poll__option").addEventListener('click', () => {
                    fetch(this.endpoint, {
                        method: "post",
                        body: `language=${ option.label }`,
                        headers: {
                            "Content-Type": "application/x-www-form-urlencoded"
                        }
                    }).then(() => {
                        this.selected = option.label
                        sessionStorage.setItem("poll-selected", option.label)
                        this.__refresh()
                    })
                })
            }

            fragment.querySelector(".poll__option-fill").style.width = `${option.percentage}%`
        }
    }
}

const p = new Poll(
    document.querySelector(".poll"),
    "Which do you prefer?"
)