const express = require('express')
const app = express()

const lista = ["Batman", "Super-Man", "Flash"]

app.get('/', function (req, res) {
    res.send('Hello Word!')
})

app.get('/personagem', function (req, res) {
    res.send('Personagem')
})


app.listen(3000)
