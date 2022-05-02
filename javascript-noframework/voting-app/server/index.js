const express = require('express')
const fs = require("fs").promises
const path = require("path")
const bodyParser = require('body-parser')
const port = 3000

const app = express()
const dataFile = path.join(__dirname, "data.json")

app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json())

app.use((req,res,next) => {
    res.setHeader("Access-Control-Allow-Origin", "*")
    next()
})

app.get("/poll", async (req,res) => {
    let data = JSON.parse(await fs.readFile(dataFile, "utf-8"))

    const totalVotes = Object.values(data).reduce( (total, n) => total += n,0)

    data = Object.entries(data).map(([label,votes]) => {
        return {
            label,
            percentage: (((100 * votes) / totalVotes) || 0).toFixed(0)
        }
    })

    res.json(data)
})

app.post("/poll", async (req, res) => {
    let data = JSON.parse(await fs.readFile(dataFile, "utf-8"))

    res.send("got it")
    data[ req.body.language   ]++
    const json = JSON.stringify(data)

    try {
        fs.writeFile(dataFile, json)
    } catch (err) {
        console.log(err)
    }

    
})

app.listen(port, () => console.log(`listening on server at ${port}`))