import express from 'express'
const app = express()


app.get("/", (req, res) => {
    res.send("server started")
})

app.listen(4000, () => {
    console.log("server started");
})