const express = require('express')
const sequelize = require('./db')
const Time = require('./models/time')


const app = express()

app.use(express.static(__dirname))
app.use(express.json())

const timesBR = []

app.post('/timesBR', async (req, res) => {
    try {
        const { nome, idade, cores, numTitulos } = req.body
        const time = await Time.create({ nome, idade, cores, numTitulos })
        return res.json(time)
    } catch (error) {
        console.error('Erro ao criar time:', error);
        return res.status(500).json({ error: 'Erro ao criar time' });
    }
})

app.get('/timesBR', async (req, res) => {

        const times = await Time.findAll()
        return res.json(times)

})

app.get('/timesBR/:nome', async (req, res) => {
    try {
        const { nome } = req.params
        const time = await Time.findOne({ where: { nome }})
        return res.json(time)
    } catch (error) {
        
    }
    

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