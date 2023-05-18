const express = require('express')

const app = express()

app.use(express.json())

const timesBR = []

app.post('/timesBR', (req, res) => {
    const { nome, idade, cores, numTitulos } = req.body
    const time = {
        nome,
        idade,
        cores,
        numTitulos
    }
    timesBR.push(time)
    return res.json(time)
})

app.get('/timesBR', (req, res) => {
    return res.json(timesBR)
})

app.get('/timesBR/:nome', (req, res) => {
    const { nome } = req.params
    const time = timesBR.find(time => time.nome === nome)
    return res.json(time)
})
//utilização de chaves nas constantes??
app.put('/timesBR/:nome', (req, res) => {
    const { nome } = req.params
    const { idade, cores, numTitulos } = req.body

    const time = timesBR.find(time => time.nome === nome)
    
    time.idade = idade
    time.cores = cores
    time.numTitulos = numTitulos

    return res.json(time)
})

app.delete('/timesBR/:nome', (req, res) => {
    const { nome } = req.params
    const timeIndex = timesBR.findIndex((time) => time.nome === nome)
    
    timesBR.splice(timeIndex, 1)
    return res.json(timesBR)
})


app.listen(3000, () => console.log('Servidor Rodandando'))