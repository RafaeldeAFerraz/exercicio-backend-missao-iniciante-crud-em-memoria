const express = require('express')
const app = express()

const lista = ["Batman", "Super-Man", "Flash"]

app.get('/', function (req, res) {
    res.send('Hello Word!')
})

app.get('/personagem', function (req, res) {
    res.send(lista.filter(Boolean))
})

app.get('/personagem/:id', function (req, res) {
    const id = req.params.id
    const item = lista[id - 1]
    
    if (!item) {
        return res.status(404).send("Pagina não existe")
    }

    res.send(item)
})

app.use(express.json())

app.post('/personagem', function (req, res) {
    const body = req.body

    const novoItem = body.nome
    
    if (!novoItem) {
        return res.status(400).send("Corpo de requisição deve conter a propriedade `nome`")
    }

    if (lista.includes(novoItem)) {
        return res.status(409).send('Esse item ja existe na lista.')
    }

    lista.push(novoItem)

    res.send("Item adicionado com sucesso: " + novoItem)
})

app.listen(3000)
