const express = require("express")
const app = express()
const port = 3000
const bodyParser = require("body-parser")
const cors = require("cors")
const { default: sql } = require("./db")


app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())


app.get("/", async (req, res) => {
    const blogPost = await sql`select * from blogs`

    return res.status(200).json(blogPost)
})

app.listen(port, () => {
    console.log("Running +", port)
}) 